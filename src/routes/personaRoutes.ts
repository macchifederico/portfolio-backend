import { Router } from "express";
import tokenService from "../services/tokenService";
import personaController from "../controllers/personaController";

class PersonaRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tokenService.verifyToken, personaController.obtenerPersona);       
        this.router.post('/', tokenService.verifyToken, personaController.crearPersona);        
        this.router.put('/:id', tokenService.verifyToken, personaController.updatePersona); 
        this.router.delete('/:id', tokenService.verifyToken, personaController.deletePersona); 
    }
}

const personaRoutes = new PersonaRoutes();
export default personaRoutes.router;