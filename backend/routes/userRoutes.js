import express from "express";
import * as controller from "../controllers/userControllers.js";

const router = express.Router();

router.route("/register").post(controller.registerUser);
router.route("/login").post(controller.loginUser);
router.route("/users").get(controller.getUsers);
router.route("/edituser").put(controller.editUser);
export default router;
