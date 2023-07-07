"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("../models/Persona");
class PersonaController {
    async obtenerPersona(req, res) {
        const { id_persona } = req.body;
        if (!id_persona) {
            return res.status(400).json({ text: 'No existe la persona en nuestra base' });
        }
        else {
            const persona = await Persona_1.Persona.findOne({
                where: {
                    id_persona: id_persona
                }
            });
            return res.status(200).json({
                text: 'Persona obtenida',
                persona: persona
            });
        }
    }
    async crearPersona(req, res) {
        const { nombre, apellido, img, ocupacion, urlLinkedin, urlGithub, email, password } = req.body;
        if (!req.body) {
            return res.status(400).json({ text: 'No existe la persona en nuestra base' });
        }
        else {
            await Persona_1.Persona.create({
                nombre: nombre,
                apellido: apellido,
                img: img,
                ocupacion: ocupacion,
                urlLinkedin: urlLinkedin,
                urlGithub: urlGithub,
                email: email,
                password: password
            });
            res.status(200).json({
                text: 'Persona creada exitosamente'
            });
        }
    }
    async updatePersona(req, res) {
        //ver como pasarle el objeto entero
        const { id_persona, nombre, apellido, img, ocupacion, urlLinkedin, urlGithub, email, password } = req.body;
        const persona = await Persona_1.Persona.findOne({
            where: {
                id: id_persona
            }
        });
        if (!persona) {
            return res.status(400).json({ text: 'No existe en nuestra base, no se pudo actualizar' });
        }
        else {
            await Persona_1.Persona.update({
                nombre: nombre,
                apellido: apellido,
                img: img,
                ocupacion: ocupacion,
                urlLinkedin: urlLinkedin,
                urlGithub: urlGithub,
                email: email,
                password: password
            }, {
                where: {
                    id: id_persona
                }
            });
            res.status(200).json({
                text: 'Persona actualizada exitosamente'
            });
        }
    }
    async deletePersona(req, res) {
        const { id_persona } = req.body;
        if (!req.body) {
            res.status(400).json({ text: 'No se pudo realizar la operación' });
        }
        else {
            try {
                await Persona_1.Persona.destroy({
                    where: {
                        id: id_persona
                    }
                });
                res.status(200).json({
                    msg: 'Persona eliminada'
                });
            }
            catch (error) {
                res.status(400).json({
                    msg: error
                });
            }
        }
    }
}
const personaController = new PersonaController();
exports.default = personaController;
