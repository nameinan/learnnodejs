require('dotenv').config();
import express ,{Request,Response} from 'express';
import cors from 'cors'
import { routes } from './routes';
import "reflect-metadata";
import { createConnection } from "typeorm";
import cookieParser from 'cookie-parser';



createConnection()
 .then(() => {

   const app = express();
   app.use(cookieParser());
   app.use(express.json());

    app.get('/',(req:Request,res:Response)=>{
        res.send('I am at Amanda');
    });
    
    app.use(cors({
         credentials:true,
         origin:["http://localhost:3000"]
    }));
    
    routes(app);

    app.listen(8000),() => {
      console.log('listening to port 8000');
    }
    
    
    

}).catch(error => console.log(error));

