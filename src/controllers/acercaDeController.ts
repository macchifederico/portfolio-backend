import { Request, Response } from "express";
import { AcercaDe } from "../models/AcercaDe";

class AcercaDeController {

    public async getAcerca(req: Request, res: Response){
        const { id } = req.params;
        try {
            const acercaDe = await AcercaDe.findOne({
                where: {
                    id: id
                }
            });
            return res.json(acercaDe); 
        } catch (error) {
            console.log(error);
        }
               
    }

    public async create(req: Request, res: Response){
        const { id_persona, presentProf } = req.body;
        try {
            await AcercaDe.create({
                id_persona: id_persona,
                presentProf: presentProf
            });
            return res.json({
                message: 'Acerca de creado'+` para id_persona nro ${id_persona}`
            });
        }
        catch (error) {
            console.log(error);    
        }

    }

    public async update(req: Request, res: Response){

    }

    public async delete(req: Request, res: Response){

    }

}

export const acercaDeController = new AcercaDeController();
export default acercaDeController;