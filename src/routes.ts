import { Router } from "express";
import { Register } from "./controller/auth.controller";
import { News } from "./controller/news.controller";

export const routes =(router:Router)=>{
    router.post('/api/register',Register);
    router.get('/api/news',News);
}

