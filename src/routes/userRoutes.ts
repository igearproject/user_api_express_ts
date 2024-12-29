import express from "express";
import userController from "../controller/userController";
import userValidate from "../middlewares/userValidate";

const router = express.Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.getOneUser);
router.post("/", userValidate, userController.createUser);
router.put("/:id", userValidate, userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
