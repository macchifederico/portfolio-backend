import { Router } from "express";
import acercaDeController from "../controllers/acercaDeController";
import tokenService from "../services/tokenService";

class AcercaDeRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:id', tokenService.verifyToken ,acercaDeController.getAcerca)
        this.router.post('/', tokenService.verifyToken ,acercaDeController.save)
        this.router.put('/:id', tokenService.verifyToken ,acercaDeController.update)
        this.router.delete('/:id', tokenService.verifyToken ,acercaDeController.delete)
    }
}

const acercaDeRoutes = new AcercaDeRoutes();
export default acercaDeRoutes.router;