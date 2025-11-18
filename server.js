import './app.js'
import express, { urlencoded } from 'express';
import morgan from 'morgan';
const app = express();
const port = process.env.PORT;
import { connectDb, disconnectdb } from './configDb/configdb.js';
import Schemes from './models/schemes.model.js';
import schemeRouter from './routers/scheme.router.js';
const startdb = async () => {
    try {
        await connectDb();
        await Schemes.sync({ force: true })
        console.log('Application started successfully.');
    }
    catch (error) {
        console.error('Failed to start application due to database error.');
        process.exit(1);
    }
}
startdb();


//middleware
app.use(morgan('dev'));
app.use(express.json());


app.use('/scheme', schemeRouter);

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/home', (req, res) => {
    res.send(`<h1>Hello you are from  in Home page !!! </h1>`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

process.on('SIGINT', async () => {
    await disconnectdb();
    process.exit(0);
})



