import { Router } from "express";
//agregar controlador
class EducacionRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', ) // educacionController.get
        this.router.post('/', ) // educacionController.save
        this.router.put('/:id', ) // educacionController.update
        this.router.delete('/:id', ) // educacionController.delete
    }
}

const educacionRoutes = new EducacionRoutes();
export default educacionRoutes;