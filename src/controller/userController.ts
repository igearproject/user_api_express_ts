import { NextFunction, Request, Response } from "express";
import User from "../models/user";

const getAllUser = async (req: Request, res: Response): Promise<any> => {
  const users = await User.findAll();
  return res.json({
    data: { users },
    messsage: "",
  });
};

const getOneUser = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const user = await User.findByPk(id);
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
};

const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, age } = req.body;
    const user = await User.create({
      name,
      email,
      age,
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      messsage: "Internal server error",
    });
  }

  return res.status(201).json({
    data: null,
    messsage: "Successfully created user",
  });
};

const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const user = await User.findOne({
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
    await user.update({
      name,
      email,
      age,
    });
    return res.status(200).json({
      data: user,
      messsage: "Successfully created user",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      messsage: "Internal server error",
    });
  }
};

const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        data: null,
        messsage: "User not found",
      });
    }
    await user.destroy();
    return res.status(204).json({
      data: user,
      messsage: "Successfully deleted user",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      messsage: "Internal server error",
    });
  }
};

export default { getAllUser, getOneUser, createUser, updateUser, deleteUser };
