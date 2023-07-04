"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acercaDeController = void 0;
const AcercaDe_1 = require("../models/AcercaDe");
class AcercaDeController {
    async getAcerca(req, res) {
        const { id } = req.params;
        try {
            const acercaDe = await AcercaDe_1.AcercaDe.findOne({
                where: {
                    id: id
                }
            });
            return res.json(acercaDe);
        }
        catch (error) {
            console.log(error);
        }
    }
    async create(req, res) {
        const { id_persona, presentProf } = req.body;
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
    }
    async delete(req, res) {
    }
}
exports.acercaDeController = new AcercaDeController();
exports.default = exports.acercaDeController;
