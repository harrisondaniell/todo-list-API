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

export const getAllTasksByUserIdRepository = async (userId) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      user: true,
      completed: true,
      createdAt: true,
      userId: true,
    },
  });
  return tasks;
};

export const updateTasksRepository = async (id, data) => {
  const task = await prisma.task.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      title: true,
      description: true,
      user: true,
      completed: true,
      createdAt: true,
      userId: true,
    },
  });
  return task;
};

export const deleteTaskRepository = async (id) => {
  const task = await prisma.task.delete({
    where: {
      id,
    },
    select: {
      id: true,
      user: true,
      userId: true,
    },
  });
  return task;
};
