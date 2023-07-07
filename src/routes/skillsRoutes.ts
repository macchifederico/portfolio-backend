import { Router } from "express";
import tokenService from "../services/tokenService";
import skillController from "../controllers/skillsController";

class SkillsRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tokenService.verifyToken, skillController.obtenerUnaSkill);
        this.router.get('/', tokenService.verifyToken, skillController.obtenerSkills);
        this.router.post('/', tokenService.verifyToken, skillController.crearSkills); 
        this.router.put('/', tokenService.verifyToken, skillController.actualizarSkills); 
        this.router.delete('/', tokenService.verifyToken, skillController.borrarSkills);
    }
}

const skillsRoutes = new SkillsRoutes();
export default skillsRoutes.router;