import express, { Router } from "express";
import { AuthenticatedUser, Login, Logout, Register, UpdateInfo, UpdatePassword } from "./controller/auth.controller";
import { Upload } from "./controller/image.controller";
import { News } from "./controller/news.controller";
import { Orders } from "./controller/order.controller";
import { Permissions } from "./controller/permission.controller";
import { CreateProduct, DeleteProduct, GetProduct, Products, UpdateProduct } from "./controller/product.controller";
import { CreateRole, DeleteRole, GetRole, Roles, UpdateRole } from "./controller/role.controller";
import { CreateUser, DeleteUser, GetUser, UpdateUser, Users } from "./controller/user.controller";
import { AuthMiddleware } from "./middleware/auth.middleware";

export const routes =(router:Router)=>{

    
    router.post('/api/register',Register);
    router.post('/api/login',Login);
    router.get('/api/user', AuthMiddleware,AuthenticatedUser);
    router.post('/api/logout',AuthMiddleware,Logout);
    router.put('/api/user/info',AuthMiddleware,UpdateInfo);
    router.put('/api/user/password',AuthMiddleware,UpdatePassword);


    router.get('/api/users', AuthMiddleware, Users);
    router.post('/api/users', AuthMiddleware, CreateUser);
    router.get('/api/users/:id', AuthMiddleware, GetUser);
    router.put('/api/users/:id', AuthMiddleware, UpdateUser);
    router.delete('/api/users/:id', AuthMiddleware, DeleteUser);


    router.get('/api/permissions', AuthMiddleware, Permissions);
    router.get('/api/roles', AuthMiddleware, Roles);
    router.post('/api/roles', AuthMiddleware, CreateRole);
    router.get('/api/roles/:id', AuthMiddleware, GetRole);
    router.put('/api/roles/:id', AuthMiddleware, UpdateRole) ;
    router.delete('/api/roles/:id', AuthMiddleware,DeleteRole);


    router.get('/api/products', AuthMiddleware, Products);
    router.post('/api/products', AuthMiddleware, CreateProduct);
    router.get('/api/products/:id', AuthMiddleware, GetProduct);
    router.put('/api/products/:id', AuthMiddleware, UpdateProduct) ;
    router.delete('/api/products/:id', AuthMiddleware,DeleteProduct);

    router.post('/api/upload', AuthMiddleware,Upload);
    router.use('/api/uploads', express.static('./uploads'));

    router.get('/api/orders', AuthMiddleware,Orders);
      
    router.get('/api/news',News);
}

