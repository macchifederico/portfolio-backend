import { Router } from "express";
import educacionController from "../controllers/educacionController";
import tokenService from "../services/tokenService";

class EducacionRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tokenService.verifyToken, educacionController.getAllEducacionPersona);
        this.router.get('/:id', tokenService.verifyToken, educacionController.getUnaEducacion);
        this.router.post('/', tokenService.verifyToken, educacionController.createEducacion);
        this.router.put('/', tokenService.verifyToken, educacionController.updateEducacion);
        this.router.delete('/', tokenService.verifyToken, educacionController.deleteEducacion);
    }
}

const educacionRoutes = new EducacionRoutes();
export default educacionRoutes.router;