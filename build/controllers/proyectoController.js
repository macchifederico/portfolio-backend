"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Proyecto_1 = require("../models/Proyecto");
class ProyectoController {
    async obtenerProyectos(req, res) {
        const id_persona = req.userId;
        const proyectos = await Proyecto_1.Proyecto.findAll({
            where: {
                id_persona: id_persona
            }
        });
        res.status(200).json({
            text: 'Proyecto obtenida correctamente',
            proyectos: proyectos
        });
    }
    async getUnProyecto(req, res) {
        const id_persona = req.userId;
        const { id } = req.params;
        const proyecto = await Proyecto_1.Proyecto.findOne({
            where: {
                id_persona: id_persona,
                id: id
            }
        });
        res.status(200).json({
            text: 'Proyecto obtenida correctamente',
            proyectos: proyecto
        });
    }
    async crearProyecto(req, res) {
        const id_persona = req.userId;
        const { nombreProyecto, descrProyecto, urlProyecto } = req.body;
        if (!id_persona) {
            res.status(400).json({ text: 'El id persona es obligatorio' });
        }
        else {
            await Proyecto_1.Proyecto.create({
                id_persona: id_persona,
                nombreProyecto: nombreProyecto,
                descrProyecto: descrProyecto,
                urlProyecto: urlProyecto
            });
            res.status(200).json({
                text: 'Proyecto creada correctamente'
            });
        }
    }
    async actualizarProyecto(req, res) {
        const { id, id_persona, nombreProyecto, descrProyecto, urlProyecto } = req.body;
        const proyectoByIdPersona = await Proyecto_1.Proyecto.findOne({
            where: {
                id_persona: id_persona,
                id: id
            }
        });
        if (!proyectoByIdPersona) {
            res.status(400).json({ text: 'No existe proyecto con ese id' });
        }
        else {
            await Proyecto_1.Proyecto.update({
                nombreProyecto: nombreProyecto,
                descrProyecto: descrProyecto,
                urlProyecto: urlProyecto
            }, {
                where: {
                    id_persona: id_persona,
                    id: id
                }
            });
            res.status(200).json({ text: 'Proyecto laboral actualizado correctamente' });
        }
    }
    async deleteProyecto(req, res) {
        const { id_proyecto, id_persona } = req.body;
        const proyectoByIdPersona = await Proyecto_1.Proyecto.findOne({
            where: {
                id_persona: id_persona,
                id: id_proyecto
            }
        });
        if (!proyectoByIdPersona) {
            res.status(400).json({ text: 'No existe proyecto con ese id' });
        }
        else {
            await Proyecto_1.Proyecto.destroy({
                where: {
                    id_persona: id_persona,
                    id: id_proyecto
                }
            });
            res.status(200).json({ text: 'Proyecto laboral eliminada correctamente' });
        }
    }
}
const proyectoController = new ProyectoController();
exports.default = proyectoController;
