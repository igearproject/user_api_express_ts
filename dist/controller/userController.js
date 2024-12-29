"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.getOneUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield user_1.default.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    data: null,
                    messsage: "User not found",
                });
            }
            return res.json({
                data: null,
                messsage: "User not found",
            });
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, age } = req.body;
                const user = yield user_1.default.create({
                    name,
                    email,
                    age,
                });
            }
            catch (error) {
                return res.status(500).json({
                    data: null,
                    messsage: "Internal server error",
                });
            }
            return res.status(201).json({
                data: null,
                messsage: "Successfully created user",
            });
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email, age } = req.body;
                const user = yield user_1.default.findOne({
                    where: {
                        id,
                    },
                });
                if (!user) {
                    return res.status(404).json({
                        data: null,
                        messsage: "User not found",
                    });
                }
                yield user.update({
                    name,
                    email,
                    age,
                });
                return res.status(200).json({
                    data: user,
                    messsage: "Successfully created user",
                });
            }
            catch (error) {
                return res.status(500).json({
                    data: null,
                    messsage: "Internal server error",
                });
            }
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield user_1.default.findByPk(id);
                if (!user) {
                    return res.status(404).json({
                        data: null,
                        messsage: "User not found",
                    });
                }
                yield user.destroy();
                return res.status(204).json({
                    data: user,
                    messsage: "Successfully deleted user",
                });
            }
            catch (error) {
                return res.status(500).json({
                    data: null,
                    messsage: "Internal server error",
                });
            }
        });
    }
    static getAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.default.findAll();
            return res.json({
                data: { users },
                messsage: "",
            });
        });
    }
    ;
}
exports.default = UserController;
// export default { getAllUser, getOneUser, createUser, updateUser, deleteUser };
