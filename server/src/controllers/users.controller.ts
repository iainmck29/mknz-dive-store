import { userService } from "../services";
import { NextFunction, Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
    const results = await userService.getUsers();
    return res.status(200).json(results);
}

const getCurrentUser = async (req: Request, res: Response) => {
    const result = await userService.getCurrentUser(req.params.id);
    return res.status(200).json(result)
}

const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    const result = await userService.getUserByUsername(username);
    return res.status(200).json(result);
};

const newUser = async (req: Request, res: Response) => {
    const { username, password } = req.body
    const result = await userService.newUser(username, password);
    return res.status(200).json(result)
}

const updateUser = async (req: Request, res: Response) => {
    const { first_name, last_name, username, address1, address2, postcode, city } = req.body;
    const { id } = req.params;

    const result = await userService.updateUser({
        first_name,
        last_name,
        username,
        address1,
        address2,
        postcode,
        city,
        id
    })
    return res.status(200).json(result);
}

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await userService.deleteUser(id)
    return res.status(204).json(result);
}

export const users = {
    getUsers,
    getCurrentUser,
    newUser,
    updateUser,
    deleteUser,
    getUserByUsername
};