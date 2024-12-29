import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const userValidate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(1).required(),
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

export default userValidate;
