import multer from "multer";

// creating the upload middleware

export const localUpload = multer({dest:'uploads'});