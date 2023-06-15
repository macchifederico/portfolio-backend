import { Router } from "express";
//agregar controlador
class SkillsRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', ) // skillsController.get
        this.router.post('/', ) // skillsController.save
        this.router.put('/:id', ) // skillsController.update
        this.router.delete('/:id', ) // skillsController.delete
    }
}

const skillsRoutes = new SkillsRoutes();
export default skillsRoutes;