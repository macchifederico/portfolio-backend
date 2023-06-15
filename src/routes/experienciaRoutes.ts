import { Router } from "express";
//agregar controlador

class ExperienciaRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', ) // experienciaController.get
        this.router.post('/', ) // experienciaController.save
        this.router.put('/:id', ) // experienciaController.update
        this.router.delete('/:id', ) // experienciaController.delete
    }
}

const experienciaRoutes = new ExperienciaRoutes();
export default experienciaRoutes;