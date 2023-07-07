import { Router } from "express";
import proyectoController from "../controllers/proyectoController";
import tokenService from "../services/tokenService";

class ProyectoRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tokenService.verifyToken, proyectoController.obtenerProyectos);
        this.router.post('/', tokenService.verifyToken, proyectoController.crearProyecto);
        this.router.post('/', tokenService.verifyToken, proyectoController.getUnProyecto);
        this.router.put('/', tokenService.verifyToken, proyectoController.actualizarProyecto);
        this.router.delete('/', tokenService.verifyToken, proyectoController.deleteProyecto);
    }
}

const proyectoRoutes = new ProyectoRoutes();
export default proyectoRoutes.router;