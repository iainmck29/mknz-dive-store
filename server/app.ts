import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { getUsers } from './controllers';
import { router } from './routes'


const app: Application = express();
const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', router)

app.get('/', (req, res, next) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})