import { Request,Response } from "express"  
export const News= (req:Request,res:Response)=>{
    res.send("here is the bbc news");
}