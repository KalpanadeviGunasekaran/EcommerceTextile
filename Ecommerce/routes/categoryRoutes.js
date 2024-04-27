import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "https://ecommercetextile-5.onrender.com/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "https://ecommercetextile-5.onrender.com/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("https://ecommercetextile-5.onrender.com/get-category", categoryControlller);

//single category
router.get("https://ecommercetextile-5.onrender.com/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "https://ecommercetextile-5.onrender.com/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
