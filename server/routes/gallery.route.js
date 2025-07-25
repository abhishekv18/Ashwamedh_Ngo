import express from "express";

import { upload } from "../helpers/cloudinary.js";
// import isAuthenticated from "../middleware/isAuthenticated.js";
import { addImage, deleteImage, getImages, handleImageUpload } from "../controllers/gallery.controller.js";

const router = express.Router();




router
  .route("/upload-image")
  .post(upload.single("my_file"), handleImageUpload); // "my_file" must match exactly
 

// router.route("/add").post(isAuthenticated,addImage);
// router.route("/get").get(getImages);
// router.route("/delete/:id").delete(isAuthenticated,deleteImage);


router.route("/add").post(addImage);
router.route("/get").get(getImages);
router.route("/delete/:id").delete(deleteImage);

export default router;