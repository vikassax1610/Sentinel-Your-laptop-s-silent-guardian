import bcrypt from "bcrypt"
import User from "../models/User.model.js"
import { successResponse, errorResponse } from "../utils/response.js"
export const registerUser = async (req, res) => {

  try {
    const { email, password, name } = req.body
    if (typeof email !== "string"
      || typeof password !== "string"
      || typeof name !== "string" ||
      !name.trim() || !email.trim() || !password.trim()
    ) {
      return errorResponse(res, 400, "Name, email, and password are required")
    }
    const normalizedEmail = email.trim().toLowerCase()
    const normalizedName = name.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      return errorResponse(res, 400, "Please provide a valid email address")
    }

    if (password.length < 8 || password.length > 16) {
      return errorResponse(res, 400, "Password must be between 8 and 16 characters")
    }

    const existingUser = await User.findOne({ email: normalizedEmail })

    if (existingUser) {
      return errorResponse(res, 409, "Email is already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email: normalizedEmail,
      password: hashedPassword,
      name: normalizedName,
      role: "user"
    })
    return successResponse(res, 201, "User registered successfully", {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    })
  }
  catch (error) {
    if (error.code === 11000) {
      return errorResponse(res, 409, "Email already exists");
    }

    console.error("Error in registerUser:", error.message);

    return errorResponse(res, 500, "Internal server error");
  }
}