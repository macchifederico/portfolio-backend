import { Request, Response } from "express";
import { AcercaDe } from "../models/AcercaDe";

class AcercaDeController {

    public async getAcerca(req: Request, res: Response){
        const { id_persona } = req.body;
        
        try {
            const acercaDe = await AcercaDe.findOne({
                where: {
                    id_persona: id_persona
                }
            });
            return res.status(200).json(acercaDe); 
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
        const { id_persona, presentProf } = req.body;

        const usuarioExistente = await AcercaDe.findOne({
            where: {
                id_persona: id_persona
            }
        })
        
        if (!usuarioExistente) {
            return res.status(404).json({
                text: 'AcercaDe no encontrado'+` para id_persona nro ${id_persona}`,
            });
        }else{
            try {
                await AcercaDe.update({
                    presentProf: presentProf
                },{
                    where: {
                        id_persona: id_persona
                    }
                });
                return res.status(200).json({
                    text: 'AcercaDe actualizado'+` para id_persona nro ${id_persona}`,
                });
            }catch (error: any) {
                console.log(error);
            } 
        }
    }

    public async delete(req: Request, res: Response){
        const { id_persona } = req.body;
        const usuarioExistente = await AcercaDe.findOne({
            where: {
                id_persona: id_persona
            }
        })

        if (!usuarioExistente) {
            res.status(404).json({
                text: 'Persona no encontrada!'
            })
        }else{
            try{
                await AcercaDe.destroy({
                    where: {
                        id_persona: id_persona
                    }
                });
                return res.status(200).json({
                    text: 'Persona eliminada'
                })
            }catch(error){
                console.log(error);
            }
        }
    }

}

export const acercaDeController = new AcercaDeController();
export default acercaDeController;