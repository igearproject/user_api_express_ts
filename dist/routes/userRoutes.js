"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
const userValidate_1 = __importDefault(require("../middlewares/userValidate"));
const router = express_1.default.Router();
router.get("/", userController_1.default.getAllUser);
router.get("/:id", userController_1.default.getOneUser);
router.post("/", userValidate_1.default, userController_1.default.createUser);
router.put("/:id", userValidate_1.default, userController_1.default.updateUser);
router.delete("/:id", userController_1.default.deleteUser);
exports.default = router;