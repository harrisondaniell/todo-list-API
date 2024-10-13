import { prisma } from "../services/prisma.js";
import bcrypt from "bcrypt";

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
