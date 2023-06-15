import { Router } from "express";
//agregar controlador

class PersonaRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', ) // personaController.get
        this.router.post('/', ) // personaController.save
        this.router.put('/:id', ) // personaController.update
        this.router.delete('/:id', ) // personaController.delete
    }
}

const personaRoutes = new PersonaRoutes();
export default personaRoutes;