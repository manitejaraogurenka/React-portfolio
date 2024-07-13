import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";
import generateToken from "../config/generateJwtToken.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, profilePic, email, review, rating, password } = req.body;
  if (!name || !email || !review || !password || !rating) {
    res.status(400).json({ error: "Please enter all the fields!" });
    return;
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).send({ error: "Please use a unique email" });
    return;
  }
  const user = await User.create({
    name,
    email,
    password,
    profilePic: profilePic || "",
    review,
    rating,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      profilePic: user.profilePic,
      review: user.review,
      rating: user.rating,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).send({ error: "Failed to create user" });
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).send({
      error: "Oops! You haven't rated yet. Please take a moment to rate now.",
    });
    return;
  }

  if (!(await user.matchPassword(password))) {
    res.status(400).send({
      error: "Incorrect password",
    });
    return;
  }
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    profilePic: user.profilePic,
    review: user.review,
    rating: user.rating,
    token: generateToken(user._id),
  });
});

export const getUsers = asyncHandler(async (req, res) => {
  try {
    const allUsers = await User.find({}).select(
      "_id name email rating review profilePic"
    );
    res.status(200).json({ allUsers });
  } catch (error) {
    res.status(500).send({ error: "Internal server error!" });
  }
});

// export const editUser = asyncHandler(async (req, res) => {});
