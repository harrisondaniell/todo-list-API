import { prisma } from "../services/prisma.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import JWT from "jsonwebtoken";

export async function findUserByEmail(email) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
}

export async function validatePassword(user, password) {
  const isPasswordValid = await bcrypt.compare(password, user.password);
  return isPasswordValid ? true : false;
}

export async function tokenGenerate(id, email) {
  try {
    const token = JWT.sign({ id, email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "2h",
    });
    return token;
  } catch (error) {
    throw new Error("Erro ao gerar o token");
  }
}
