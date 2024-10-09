import { prisma } from "../services/prisma.js";

export const createTaskRepositorry = async (data) => {
  const task = await prisma.task.create({
    data,
    select: {
      id: true,
      title: true,
      description: true,
      userId: true,
      completed: true,
      createdAt: true,
      user: true,
    },
  });

  return task;
};
