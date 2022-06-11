import { productService } from "../services";
import { cartService } from "../services/carts.service";

const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);


const domain = 'http://localhost:9000/checkout/'
// process.env.PRODUCTION ? process.env.DOMAIN : 

const createCheckoutSession = async () => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 'price_1L8nAeLnUzVHmZYu2bFIrpx7',
                quantity: 1
            },
        ],
        mode: 'payment',
        success_url: `${domain}?success=true`,
        cancel_url: `${domain}?canceled=true`,
        automatic_tax: {enabled: false}
    });

    
}

const lineItems = async (cartID: string) => {
    let lineitems = [];
    // Get all products in cart
    const results = await cartService.getCartProducts(cartID);
    // Get prices for each product
    const items = results.map(async (product) => {
        //@ts-ignore
        const price = await productService.getProductPrice(product.product_id);
        //@ts-ignore
        product['price'] = price;
    })

    const lineItems = items.forEach(item => {
        return {
            //@ts-ignore
            price,
            //@ts-ignore
            quantity
        }
    })
    
}

export const checkout = {
    createCheckoutSession
};