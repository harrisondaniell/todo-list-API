import bcrypt from "bcrypt";

import {
    createUserRepository,
    getAllUsersRepository,
    updateUserRepository,
    deleteUserRepository
} from "../repositorys/user.repository.js";

export const createUserController = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword
        const user = await createUserRepository(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsersRepository();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateUserController = async (req, res) => {
    try {
        const user = await updateUserRepository(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const deleteUserController = async (req, res) => {
    try {
      const user = await deleteUserRepository(req.params.id);
      console.log(user);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  };
