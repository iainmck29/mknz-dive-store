CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name varchar(100),
    last_name varchar(100),
    username varchar (100) NOT NULL,
    password_hash varchar(100) NOT NULL,
    address1 varchar(100),
    address2 varchar(100),
    postcode varchar(10),
    city varchar(100),
    member_since timestamp DEFAULT (now()),
    user_role varchar(100) DEFAULT 'customer'
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    merchant_id integer NOT NULL,
    description text,
    price numeric,
    title varchar(100) NOT NULL,
    img_src text
);

CREATE TYPE category AS ENUM ('mask_snorkel', 'wetsuit', 'bcd', 'regulator', 'fins', 'computer', 'accessories', 'essentials', 'tank');

CREATE TABLE products_categories (
    product_id integer,
    category category
);

CREATE TABLE merchants (
    id SERIAL PRIMARY KEY,
    name varchar(100),
    description text,
    email varchar(100)
);

CREATE TYPE order_status AS ENUM ('in_progress', 'delivered', 'cancelled');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id integer NOT NULL,
    status order_status,
    created_at timestamp DEFAULT (now()),
    total_cost numeric
);

CREATE TABLE orders_products (
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    user_id integer DEFAULT NULL,
    total numeric DEFAULT 0.00
);

CREATE TABLE cart_products (
    cart_id integer,
    product_id integer,
    quantity integer
);

ALTER TABLE products ADD FOREIGN KEY (merchant_id) REFERENCES merchants(id);

ALTER TABLE products_categories ADD FOREIGN KEY (product_id) REFERENCES products(id);

ALTER TABLE products_categories ADD PRIMARY KEY (product_id, category);

ALTER TABLE orders ADD FOREIGN KEY (customer_id) REFERENCES users(id);

ALTER TABLE orders_products ADD PRIMARY KEY (order_id, product_id);

ALTER TABLE orders_products ADD FOREIGN KEY (order_id) REFERENCES orders(id);

ALTER TABLE orders_products ADD FOREIGN KEY (product_id) REFERENCES products(id);

ALTER TABLE cart ADD FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE cart_products ADD PRIMARY KEY (cart_id, product_id);

ALTER TABLE cart_products ADD FOREIGN KEY (cart_id) REFERENCES cart(id);

ALTER TABLE cart_products ADD FOREIGN KEY (product_id) REFERENCES products(id);

