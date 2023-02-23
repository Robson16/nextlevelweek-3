import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import './database/connection';
import errorHandler from './errors/handler';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(process.env.PORT || 3333);