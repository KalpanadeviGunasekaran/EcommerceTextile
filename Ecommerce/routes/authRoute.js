import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("https://ecommercetextile-5.onrender.com/register", registerController);

//LOGIN || POST
router.post("https://ecommercetextile-5.onrender.com/login", loginController);

//Forgot Password || POST
router.post("https://ecommercetextile-5.onrender.com/forgot-password", forgotPasswordController);

//test routes
router.get("https://ecommercetextile-5.onrender.com/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("https://ecommercetextile-5.onrender.com/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("https://ecommercetextile-5.onrender.com/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("https://ecommercetextile-5.onrender.com/profile", requireSignIn, updateProfileController);

//orders
router.get("https://ecommercetextile-5.onrender.com/orders", requireSignIn, getOrdersController);

//all orders
router.get("https://ecommercetextile-5.onrender.com/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "https://ecommercetextile-5.onrender.com/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
