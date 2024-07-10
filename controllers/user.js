import { UserModel } from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
  try {
    // Hash user password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    // Create a new user
    const registeredUser = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });
    //   Return response
    res.status(201).json("User registered successfully");
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {};

const logout = async (req, res, next) => {};

const profile = async (req, res, next) => {};
