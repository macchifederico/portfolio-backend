import { Router } from "express";
//agregar controlador
class ProyectoRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', ) // proyectoController.get
        this.router.post('/', ) // proyectoController.save
        this.router.put('/:id', ) // proyectoController.update
        this.router.delete('/:id', ) // proyectoController.delete
    }
}

const proyectoRoutes = new ProyectoRoutes();
export default proyectoRoutes;