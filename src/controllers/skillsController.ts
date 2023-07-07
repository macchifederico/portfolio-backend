import {Response, Request} from 'express'
import { Skills } from "../models/Skills";

class SkillController{

    public async obtenerSkills(req: Request, res: Response){
        const {id_persona} = req.body;

        const skills = await Skills.findAll({
            where:{
                id_persona: id_persona
            }
        })
        res.status(200).json({
            msg: 'Skills obtenida correctamente',
            Skillss: Skills
        })
    }

    public async obtenerUnaSkill(req: Request, res: Response){
        const {id_persona, id_skills} = req.body;

        const skills = await Skills.findOne({
            where:{
                id_persona: id_persona,
                id: id_skills
            }
        })

        res.status(200).json({
            msg: 'Skills obtenida correctamente',
            skills: skills
        })
    }

    public async crearSkills(req: Request, res: Response){
        const {id_persona, empresa, cargo, fecha_inicio, fecha_fin, en_proceso} = req.body;

        if(!id_persona){
            res.status(400).json({msg: 'El id persona es obligatorio'})
        }else{
            await Skills.create({
                id_persona: id_persona,
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            })
            res.status(200).json({
                msg: 'Skills creada correctamente'
            })
        }
    }

    public async actualizarSkills(req: Request, res: Response){
        const {id_skills, id_persona, empresa, cargo, fecha_inicio, fecha_fin,  en_proceso} = req.body;

        const skillsByIdPersona = await Skills.findOne({
            where:{
                id_persona: id_persona,
                id: id_skills
            }
        })

        if(!skillsByIdPersona){
            res.status(400).json({msg: 'No existe experiencia laboral con ese id'})
        }else{
            await Skills.update({
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            },{
                where: {
                    id_persona: id_persona,
                    id: id_skills
                }
            })
            res.status(200).json({msg: 'Skills laboral actualizada correctamente'})
        }
    }

    public async borrarSkills(req: Request, res: Response){
        const {id_skills, id_persona} = req.body;

        const skillsByIdPersona = await Skills.findOne({
            where:{
                id_persona: id_persona,
                id: id_skills
            }
        })

        if(!skillsByIdPersona){
            res.status(400).json({msg: 'No existe Skills con ese id'})
        }else{
            await Skills.destroy({
                where: {
                    id_persona: id_persona,
                    id: id_skills
                }
            })
            res.status(200).json({msg: 'Skills laboral eliminada correctamente'})
        }
    }
}

const skillController = new SkillController();
export default skillController;