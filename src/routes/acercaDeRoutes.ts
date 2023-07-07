import { Router } from "express";
import acercaDeController from "../controllers/acercaDeController";
import tokenService from "../services/tokenService";

class AcercaDeRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tokenService.verifyToken ,acercaDeController.getAcerca)
        this.router.post('/', tokenService.verifyToken ,acercaDeController.create)
        this.router.put('/', tokenService.verifyToken ,acercaDeController.update)
        this.router.delete('/', tokenService.verifyToken ,acercaDeController.delete)
    }
}

const acercaDeRoutes = new AcercaDeRoutes();
export default acercaDeRoutes.router;