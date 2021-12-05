import { Request,Response } from "express"  
import { Entity, getManager } from "typeorm";
import { User } from "../entity/user.entity";
import { RegisterValidation } from "../validation/register.validation";
import bcryptjs, { genSalt } from 'bcryptjs';
import {verify, sign } from "jsonwebtoken";



export const Register=  async (req:Request,res:Response)=>{
    const body = req.body;
    const {error}=  RegisterValidation.validate(body);
    if(error){
        return res.status(400).send(error.details);
    }

    if (body.password!= body.password_confirm){
        return res.status(400).send({
            message:"Password and confirm password are not same"
        })
    }

    const repository = getManager().getRepository(User);
    const {password,...user} = await repository.save({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        password: await bcryptjs.hash(body.password,10)
    });

    res.send(user);
}



export const Login=  async (req:Request,res:Response)=>{
    const body = req.body;
    const repository = getManager().getRepository(User);
    const user = await repository.findOne({email:body.email})

     if(!user){
         res.status(404).send('Invalid credential!!');
     } 
     if(!await bcryptjs.compare(body.password, user.password)){
        res.status(400).send('Invalid credential!!');
     }

    const{password,...data}=user;
    
    const payload= {
        id:user.id
    }
    
    //awt cookies with jwt payload
    res.cookie("jwt",sign({ id:user.id, email:user.email},"secret" ),{
           httpOnly:true,maxAge:24*60*60*1000 }); 

    res.send({
        message:"succeed"
    });
}




export const AuthenticatedUser =  async (req:Request,res:Response)=>{

    const jwt = req.cookies['jwt'];
    const payload:any = verify(jwt,"secret");
    if(!payload){
        res.status(401).send('unauthenticated');
    }
    const repository = getManager().getRepository(User);
    const{password,...user} = await repository.findOne({id:payload.id});
    res.send(user);
 
}

