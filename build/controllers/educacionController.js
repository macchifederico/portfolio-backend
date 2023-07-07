"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educacion = void 0;
const Educacion_1 = require("../models/Educacion");
class EducacionController {
    constructor() {
    }
    async getAllEducacionPersona(req, res) {
        const { id_persona } = req.body;
        if (!id_persona) {
            return res.status(400).json({ text: 'No existe la persona en nuestra base' });
        }
        else {
            const educaciones = await Educacion_1.Educacion.findAll({
                where: {
                    id_persona: id_persona
                }
            });
            return res.status(200).json({
                text: 'Educacion obtenida',
                educaciones: educaciones
            });
        }
    }
    async getUnaEducacion(req, res) {
        const { id_persona, id_educacion } = req.body;
        const educacion = await Educacion_1.Educacion.findOne({
            where: {
                id_persona: id_persona,
                id: id_educacion
            }
        });
        res.status(200).json({
            msg: 'Educacion obtenida correctamente',
            educacion: educacion
        });
    }
    async createEducacion(req, res) {
        //cambiar por modelo??
        const { id_persona, titulo, institucion, fecha_inicio, fecha_fin, en_proceso } = req.body;
        if (!req.body) {
            return res.status(400).json({ text: 'No existe la persona en nuestra base' });
        }
        else {
            await Educacion_1.Educacion.create({
                id_persona: id_persona,
                titulo: titulo,
                institucion: institucion,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            });
            res.status(200).json({
                text: 'Educacion creada exitosamente'
            });
        }
    }
    async updateEducacion(req, res) {
        const { id_persona, id_educacion, titulo, institucion, fecha_inicio, fecha_fin, en_proceso } = req.body;
        const educacion_actualizar = await Educacion_1.Educacion.findOne({
            where: {
                id_persona: id_persona,
                id: id_educacion
            }
        });
        if (!educacion_actualizar) {
            return res.status(400).json({ text: 'No existe en nuestra base, no se pudo actualizar' });
        }
        else {
            await Educacion_1.Educacion.update({
                titulo: titulo,
                institucion: institucion,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            }, {
                where: {
                    id_persona: id_persona,
                    id: id_educacion
                }
            });
            res.status(200).json({
                text: 'Educacion actualizada exitosamente'
            });
        }
    }
    async deleteEducacion(req, res) {
        const { id_persona, id_educacion } = req.body;
        if (!req.body) {
            res.status(400).json({ text: 'No se pudo realizar la operación' });
        }
        else {
            try {
                await Educacion_1.Educacion.destroy({
                    where: {
                        id_persona: id_persona,
                        id: id_educacion
                    }
                });
                res.status(200).json({
                    text: 'Educacion eliminada'
                });
            }
            catch (error) {
                res.status(400).json({
                    txt: error
                });
            }
        }
    }
}
exports.educacion = new EducacionController();
exports.default = exports.educacion;
