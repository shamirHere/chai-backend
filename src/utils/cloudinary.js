import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// cloudinary configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: 298697165422964,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

cloudinary.config({
  cloud_name: "dnrwsyz2g",
  api_key: "298697165422964",
  api_secret: "JPytNann3SHoGciYxH-0xbRt32I",
});

// function to upload files on cloudinary
export const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log(localFilePath, "this is local file path");
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfully

    fs.unlinkSync(localFilePath); // delete the local file after it's been uploaded
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    console.log("assets upload to cloudinary failed", error);
    return null;
  }
};
