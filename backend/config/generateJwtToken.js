import jwt from "jsonwebtoken";

const generateToken = ({ _id }) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};

export default generateToken;
