import { prisma } from "../services/prisma.js";

export const createUserRepositorry = async (data) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};
