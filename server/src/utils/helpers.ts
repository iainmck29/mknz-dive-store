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
