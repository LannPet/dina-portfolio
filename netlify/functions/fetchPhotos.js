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

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          expression: 'asset_folder:"kulinarika"',
          sort_by: [{ created_at: "desc" }],
          max_results: 100,
        }),
      }
    )

    const rawBody = await response.text()
    let parsedBody = null

    try {
      parsedBody = rawBody ? JSON.parse(rawBody) : null
    } catch {
      if (!response.ok) {
        return {
          statusCode: response.status,
          headers: jsonHeaders,
          body: JSON.stringify({
            error: `Cloudinary returned non-JSON response: ${rawBody.slice(0, 200)}`,
          }),
        }
      }

      throw new Error("Cloudinary returned a non-JSON success response.")
    }

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
