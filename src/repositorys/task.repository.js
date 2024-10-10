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

export const getAllTasksByUserId = async (userId) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId,
    },
  });
  return tasks;
};

export const updateTasks = async (data, id) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId,
    },
  });
  return tasks;
};
