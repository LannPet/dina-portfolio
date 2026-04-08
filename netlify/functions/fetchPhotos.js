const jsonHeaders = {
  "Content-Type": "application/json",
}

export const handler = async () => {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_API_SECRET

    if (!cloudName || !apiKey || !apiSecret) {
      throw new Error("Cloudinary environment variables are missing.")
    }

    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")
    const params = new URLSearchParams({
      asset_folder: "kulinarika",
      max_results: "100",
    })

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/by_asset_folder?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    )

    const rawBody = await response.text()
    const parsedBody = rawBody ? JSON.parse(rawBody) : null

    if (!response.ok) {
      const cloudinaryMessage =
        parsedBody?.error?.message ||
        parsedBody?.error ||
        `Cloudinary request failed with status ${response.status}.`

      return {
        statusCode: response.status,
        headers: jsonHeaders,
        body: JSON.stringify({ error: cloudinaryMessage }),
      }
    }

    return {
      statusCode: 200,
      headers: jsonHeaders,
      body: JSON.stringify(parsedBody?.resources ?? []),
    }
  } catch (error) {
    console.error("Cloudinary fetchPhotos failed:", error)

    return {
      statusCode: 500,
      headers: jsonHeaders,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
    }
  }
}
