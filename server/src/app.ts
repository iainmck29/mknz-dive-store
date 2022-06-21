import express from 'express';
import 'dotenv/config';
import errorhandler from 'errorhandler'
import { router } from './routes'
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import passport from 'passport';
import "./config/passport";
import cookieParser from "cookie-parser";


const app = express();
const port = process.env.PORT || 9000;

const corsOptions = {
    origin: 'https://mknz-dive-store.netlify.app',
    credentials: true
}


app.use(cors(corsOptions))

app.use(helmet());
app.use(express.json());
app.use(errorhandler());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(morgan('dev'));
app.use(passport.initialize())



app.use('/api', router);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});