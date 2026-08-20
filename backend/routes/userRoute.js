import express from "express"
import { changePassword, forgotPassword, getMeController, loginUser, logoutUser, registerUser, verification, verifyOTP } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { userSchema, validateUser } from "../validators/userValidate.js";
import authMiddleware from "../middleware/auth.middleware.js"

const router =  express.Router();


router.post("/register",validateUser(userSchema),registerUser);
router.post("/verify",verification);
router.post("/login",loginUser);
//router.post("/logout",isAuthenticated,logoutUser);
router.post("/forgot-password",forgotPassword);
router.post("/verify-otp/:email",verifyOTP);
router.post('/change-password/:email',changePassword);
router.get('/get-me',authMiddleware,getMeController);
router.post("/logout",logoutUser);

export default router