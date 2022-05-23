import bcrypt from "bcrypt"
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


export const hashPassword = (password: string) => {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return err;
        }
        return hash;
    })
}

export const comparePassword = async (username: string, password: string) => {
    const user = await userService.getUserByUsername(username);
    //@ts-ignore
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return err
        }
        return result;
    })
}