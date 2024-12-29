"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userValidate = (req, res, next) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        age: joi_1.default.number().min(1).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({
            data: null,
            error: error,
            message: "input data not valid",
        });
        return;
    }
    next();
};
exports.default = userValidate;
