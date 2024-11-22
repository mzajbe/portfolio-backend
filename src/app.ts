import express, { Request, Response } from "express";
import cors from 'cors';
import globalErrorHandler from "./middlewares/globalErrorhandler";
import notFound from "./middlewares/notFound";
import router from "./routes";
import cookieParser from 'cookie-parser'


const app = express()


//parsers
app.use(express.json());
app.use(cookieParser())
app.use(cors({origin:'http://localhost:5173',credentials:true}));



// application routes
app.use('/', router);

const test = (req: Request, res: Response) => {
  res.send('Portfolio')
};

app.get('/', test);


app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;


