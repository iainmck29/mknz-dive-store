# MKNZ Dive Store 🤿
A working e-commerce web app for scuba diving equipment.

Live Site: https://mknz-dive-store.netlify.app/

## About This Project
- This project is built using the PERN stack (PostgresQL, Express, React & Node).
- Utilises Typescript over vanilla JS to improve development and deliver a more robust application.
- The Node/Express back-end is built as a RESTful API which is consumed by the decoupled React front-end.
- PassportJS is used as the authentication library and currently supports the use of JWT's as the authentication method. This will be extended to support Google authentication eventually.
- Stripe API handles payment authorisation. Stripe provides an excellent and easy to understand platform for payment handling which made this the obvious choice.
- React Bootstrap is used for styling. Creating an advanced UI was beyond the scope of this project therefore utilising this library sped up development.
- Redux handles state management throughout the app.

## Installation instructions
This app is free to use by whoever would care to do so however some set up will be required.
1. Fork and clone the app down to your local machine.
2. Open two terminals. In one terminal ```cd``` into the server folder and in the other terminal ```cd``` into the client folder. Run ```npm install``` in both terminals.
3. Create the database in your chosen Postgres GUI client. I used Postbird but another would be fine. Run the ```e-commerce.sql``` script found in models followed by ```merchants.sql``` and then ```products.sql```. It may be that you will need to change some of the foreign key values as these were related to my own database and will not relate to the ID's that your database creates.
4. Create a .env file in the /server file. A list of all the necessary environment variables are listed below.
5. You will need to set up your own Stripe API account. At the dashboard, switch to Test Mode and obtain your publishable and secret keys. The publishable key will be set in the variable ```stripePromise``` in the ```client/src/App.tsx``` file. The secret key will live in the .env file you just created.
6. Set the environment variables as listed below.
7. In ```client/src/config/axiosConfig.ts``` change production to false.
8. Now with your /server terminal run ```npm run dev``` to start the server. In your /client terminal run ```npm start``` to start the React application. You should now be directed to the live web app in your browser.

### Environment Variables for Installation

## Screenshots

## Database Schema

## Endpoints





## To Do's
...
