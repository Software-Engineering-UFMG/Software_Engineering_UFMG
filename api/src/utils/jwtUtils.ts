import jwt from "jsonwebtoken";
import { env } from "../config/env";

const SECRET_KEY = env.SECRET_KEY;
const JWT_EXPIRATION = env.JWT_EXPIRATION || "15d";

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: JWT_EXPIRATION as jwt.SignOptions["expiresIn"],
  });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};
