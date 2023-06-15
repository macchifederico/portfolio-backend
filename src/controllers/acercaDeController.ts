import { Request, Response } from "express";
import { AcercaDe } from "../models/AcercaDe";

class AcercaDeController {

    public async getAcerca(req: Request, res: Response){
        const { id } = req.params;
        try {
            const acercaDe = await AcercaDe.findAll({_id: id});
        } catch (error) {
            console.log(error);
        }
               
    }

    public async save(req: Request, res: Response){

    }

    public async update(req: Request, res: Response){

    }

    public async delete(req: Request, res: Response){

    }

}

export const acercaDeController = new AcercaDeController();
export default acercaDeController;