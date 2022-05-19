import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler'
import { router } from './routes'



const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(errorhandler());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', router);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});