
import express ,{Request,Response} from 'express';
import cors from 'cors'

const app = express();
app.use(express.json());


app.get('/',(req:Request,res:Response)=>{
    res.send('I am at bishnupur');
});

app.use(cors({
    origin:["http://localhost:3000"]
}));


app.listen(8000),() => {
    console.log('listening to port 8000');
}