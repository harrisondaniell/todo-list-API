import {
  createTaskRepository,
  getAllTasksByUserIdRepository,
  updateTasksRepository,
  deleteTaskRepository,
} from "../repositorys/task.repository.js";

export const createTaskController = async (req, res) => {
  try {
    const task = await createTaskRepository(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllTasksByUserIdController = async (req, res) => {
  try {
    const tasks = await getAllTasksByUserIdRepository();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateTasksController = async (req, res) => {
  try {
    const task = await updateTasksRepository(req.params.id, req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteTaskController = async (req, res) => {
  try {
    const user = await deleteTaskRepository(req.params.id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
