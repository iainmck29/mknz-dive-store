import { userService } from "../services";
import { NextFunction, Request, Response } from "express";
import { nextTick } from "process";

const getUsers = async (req: Request, res: Response) => {
    const results = await userService.getUsers();
    return res.status(200).json(results);
}

const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore    
    const id = req.user.id
    if (id) {
        // if (id !== req.params.id) {
        //     res.status(401).send('You are not authorised to view that profile')
        // }
        const result = await userService.getCurrentUser(id);
        res.status(200).json(result)
        next();
    } else {
        return res.status(404).send();
    }
}

const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    const result = await userService.getUserByUsername(username);
    return res.status(200).json(result);
};

const newUser = async (req: Request, res: Response) => {
    const { username, password } = req.body
    console.log(username, password)
    try {
    const result = await userService.newUser(username, password);
    return res.status(200).json(result)
    } catch (err) {
        console.log('failing here')
    }
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