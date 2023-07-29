"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acercaDeController = void 0;
const AcercaDe_1 = require("../models/AcercaDe");
const Persona_1 = require("../models/Persona");
class AcercaDeController {
    async getAcerca(req, res) {
        const id_persona = req.userId;
        try {
            const acercaDe = await AcercaDe_1.AcercaDe.findOne({
                where: {
                    id_persona: id_persona
                }
            });
            if (acercaDe) {
                return res.status(200).json(acercaDe);
            }
        }
        catch (error) {
            res.status(500).send({
                text: 'Error al obtener acerca de'
            });
        }
    }
    async create(req, res) {
        const { id_persona } = req.body;
        const { presentProf } = req.body.acercade;
        try {
            await AcercaDe_1.AcercaDe.create({
                id_persona: id_persona,
                presentProf: presentProf
            });
            return res.json({
                message: 'Acerca de creado' + ` para id_persona nro ${id_persona}`
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async update(req, res) {
        const { id_persona } = req.body;
        const { presentProf } = req.body.acercade;
        const usuarioExistente = await Persona_1.Persona.findOne({
            where: {
                id: id_persona
            }
        });
        if (!usuarioExistente) {
            return res.status(404).json({
                text: 'Usuario no encontrado' + ` para id nro ${id_persona}`,
            });
        }
        else {
            try {
                await AcercaDe_1.AcercaDe.update({
                    presentProf: presentProf
                }, {
                    where: {
                        id_persona: id_persona
                    }
                });
                return res.status(200).json({
                    text: `AcercaDe actualizado con exito`
                });
            }
            catch (error) {
                res.status(400).json({
                    text: 'Error al actualizar acerca de'
                });
            }
        }
    }
    async delete(req, res) {
        const { id_persona } = req.body;
        const usuarioExistente = await AcercaDe_1.AcercaDe.findOne({
            where: {
                id_persona: id_persona
            }
        });
        if (!usuarioExistente) {
            res.status(404).json({
                text: 'Persona no encontrada!'
            });
        }
        else {
            try {
                await AcercaDe_1.AcercaDe.destroy({
                    where: {
                        id_persona: id_persona
                    }
                });
                return res.status(200).json({
                    text: 'Persona eliminada'
                });
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
exports.acercaDeController = new AcercaDeController();
exports.default = exports.acercaDeController;
