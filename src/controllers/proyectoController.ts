import { Request, Response } from 'express';
import { Proyecto } from '../models/Proyecto';

class ProyectoController{

    public async obtenerProyectos(req: Request, res: Response){
        const id_persona = req.userId;
        const proyectos = await Proyecto.findAll({
            where:{
                id_persona: id_persona
            }
        })

        res.status(200).json({
            msg: 'Proyecto obtenida correctamente',
            proyectos: proyectos
        })
    }

    public async getUnProyecto(req: Request, res: Response){
        const id_persona = req.userId;
        const {id} = req.params;
        
        const proyecto = await Proyecto.findOne({
            where:{
                id_persona: id_persona,
                id: id
            }
        })

        res.status(200).json({
            msg: 'Proyecto obtenida correctamente',
            proyectos: proyecto
        })
    }

    public async crearProyecto(req: Request, res: Response){
        const id_persona = req.userId;
        const {nombreProyecto, descrProyecto, urlProyecto} = req.body;        

        if(!id_persona){
            res.status(400).json({msg: 'El id persona es obligatorio'})
        }else{
            await Proyecto.create({
                id_persona: id_persona,
                nombreProyecto: nombreProyecto,
                descrProyecto: descrProyecto,
                urlProyecto: urlProyecto
            })
            res.status(200).json({
                msg: 'Proyecto creada correctamente'
            })
        }
    }

    public async actualizarProyecto(req: Request, res: Response){
        const {id, id_persona, nombreProyecto, descrProyecto, urlProyecto} = req.body;

        const proyectoByIdPersona = await Proyecto.findOne({
            where:{
                id_persona: id_persona,
                id: id
            }
        })

        if(!proyectoByIdPersona){
            res.status(400).json({msg: 'No existe proyecto con ese id'})
        }else{
            await Proyecto.update({
                nombreProyecto: nombreProyecto,
                descrProyecto: descrProyecto,
                urlProyecto: urlProyecto
            },{
                where: {
                    id_persona: id_persona,
                    id: id
                }
            })
            res.status(200).json({msg: 'Proyecto laboral actualizado correctamente'})
        }
    }

    public async deleteProyecto(req: Request, res: Response){
        const {id_proyecto, id_persona} = req.body;

        const proyectoByIdPersona = await Proyecto.findOne({
            where:{
                id_persona: id_persona,
                id: id_proyecto
            }
        })

        if(!proyectoByIdPersona){
            res.status(400).json({msg: 'No existe proyecto con ese id'})
        }else{
            await Proyecto.destroy({
                where: {
                    id_persona: id_persona,
                    id: id_proyecto
                }
            })
            res.status(200).json({msg: 'Proyecto laboral eliminada correctamente'})
        }
    }
}

const proyectoController = new ProyectoController();
export default proyectoController;