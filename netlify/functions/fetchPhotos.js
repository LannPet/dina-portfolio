// netlify/functions/getPhotos.js

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const handler = async () => {
  try {
    const result = await cloudinary.api.resources_by_asset_folder("kulinarika", {
      max_results: 100,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(result.resources),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};