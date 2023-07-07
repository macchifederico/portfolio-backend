import { Router } from "express";
import tokenService from "../services/tokenService";
import experienciaController from "../controllers/experienciaController";

class ExperienciaRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tokenService.verifyToken,  experienciaController.getExperienciaLaboral);
        this.router.post('/', tokenService.verifyToken, experienciaController.createExperienciaLaboral); 
        this.router.put('/:id', tokenService.verifyToken, experienciaController.updateExperienciaLaboral);
        this.router.delete('/:id', tokenService.verifyToken, experienciaController.deleteExperienciaLaboral);
    }
}

const experienciaRoutes = new ExperienciaRoutes();
export default experienciaRoutes.router;