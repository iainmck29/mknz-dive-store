import bcrypt from "bcrypt"
import { NextFunction } from "express";
import { userService } from "../services";

type Product = {
    quantity: number,
    price: number
}

type Products = Product[];

export const calculateTotalCost = (products: Products) => {
    return products.reduce((prevProduct, currentProduct) => {
        return prevProduct + (currentProduct.quantity * currentProduct.price)
    }, 0)
}


export const hashPassword = async (password: string, next: NextFunction) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
   }

export const comparePassword = async (username: string, password: string) => {
    const user = await userService.getUserByUsername(username);
    console.log(user)
    //@ts-ignore
    bcrypt.compare(password, user.password_hash, (err, result) => {
        if (err) {
            console.log(err)
            return result;
        }
        return result;
    })
}