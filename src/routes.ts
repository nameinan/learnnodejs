import { Router } from "express";
import { AuthenticatedUser, Login, Register } from "./controller/auth.controller";
import { News } from "./controller/news.controller";

export const routes =(router:Router)=>{
    router.post('/api/register',Register);
    router.post('/api/login',Login);
    router.get('/api/user',AuthenticatedUser);
    router.get('/api/news',News);
}

