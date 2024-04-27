import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "https://ecommercetextile-5.onrender.com/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "https://ecommercetextile-5.onrender.com/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("https://ecommercetextile-5.onrender.com/get-product", getProductController);

//single product
router.get("https://ecommercetextile-5.onrender.com/get-product/:slug", getSingleProductController);

//get photo
router.get("https://ecommercetextile-5.onrender.com/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("https://ecommercetextile-5.onrender.com/delete-product/:pid", deleteProductController);

//filter product
router.post("https://ecommercetextile-5.onrender.com/product-filters", productFiltersController);

//product count
router.get("https://ecommercetextile-5.onrender.com/product-count", productCountController);

//product per page
router.get("https://ecommercetextile-5.onrender.com/product-list/:page", productListController);

//search product
router.get("https://ecommercetextile-5.onrender.com/search/:keyword", searchProductController);

//similar product
router.get("https://ecommercetextile-5.onrender.com/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("https://ecommercetextile-5.onrender.com/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("https://ecommercetextile-5.onrender.com/braintree/token", braintreeTokenController);

//payments
router.post("https://ecommercetextile-5.onrender.com/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
