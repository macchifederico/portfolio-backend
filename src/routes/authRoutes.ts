import { Router } from "express";
import authController from '../controllers/authController';

class AuthRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/registro', authController.registro); //completar
        this.router.post('/login', authController.login); 
    }
}


const authRoutes = new AuthRoutes();

export default authRoutes.router;