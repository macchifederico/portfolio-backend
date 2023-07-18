import {Response, Request} from 'express'
import { Skills } from "../models/Skills";

class SkillController{

    public async obtenerSkills(req: Request, res: Response){
        const id_persona = req.userId;
        const skills = await Skills.findAll({
            where:{
                id_persona: id_persona
            }
        })
        res.status(200).json({
            msg: 'Skills obtenida correctamente',
            skills: skills
        })
    }

    public async obtenerUnaSkill(req: Request, res: Response){        
        const id_persona = req.userId;
        const {id} = req.params;        
        
        const skills = await Skills.findOne({
            where:{
                id_persona: id_persona,
                id: id
            }
        })

        res.status(200).json({
            msg: 'Skills obtenida correctamente',
            skills: skills
        })
    }

    public async crearSkills(req: Request, res: Response){
        const id_persona = req.userId;
        const {tecnologia, porcentaje} = req.body;    
        
        if(!id_persona){
            res.status(400).json({msg: 'El id persona es obligatorio'})
        }else{
            await Skills.create({
                id_persona: id_persona,
                tecnologia: tecnologia,
                porcentaje: porcentaje
            })
            res.status(200).json({
                msg: 'Skills creada correctamente'
            })
        }
    }

    public async actualizarSkills(req: Request, res: Response){
        const id_persona = req.userId;
        const {tecnologia, porcentaje} = req.body;
        const { id } = req.params;
        const skillsByIdPersona = await Skills.findOne({
            where:{
                id_persona: id_persona,
                id: id
            }
        })

        if(!skillsByIdPersona){
            res.status(400).json({msg: 'No existe experiencia laboral con ese id'})
        }else{
            await Skills.update({
               tecnologia: tecnologia,
               porcentaje: porcentaje
            },{
                where: {
                    id_persona: id_persona,
                    id: id
                }
            })
            res.status(200).json({msg: 'Skills laboral actualizada correctamente'})
        }
    }

    public async borrarSkills(req: Request, res: Response){
        const id_persona = req.userId;
        const { id } = req.params;

        const skillsByIdPersona = await Skills.findOne({
            where:{
                id_persona: id_persona,
                id: id
            }
        })

        if(!skillsByIdPersona){
            res.status(400).json({msg: 'No existe Skills con ese id'})
        }else{
            await Skills.destroy({
                where: {
                    id_persona: id_persona,
                    id: id
                }
            })
            res.status(200).json({msg: 'Skills laboral eliminada correctamente'})
        }
    }
}

const skillController = new SkillController();
export default skillController;