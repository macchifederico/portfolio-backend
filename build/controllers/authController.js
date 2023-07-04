"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Persona_1 = require("../models/Persona");
class AuthController {
    async registro(req, res) {
        // const {nombre, apellido, email, password} = req.body;
        // const newPersona = await Persona.create({
        //     nombre,
        //     apellido,
        //     email,
        //     password
        // });
        // const token = jwt.sign({_id: newPersona.id}, 'secretkey');
        // res.status(200).send({
        //     token,
        //     text: "Registro Exitoso"
        // });
    }
    async login(req, res, next) {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(500).send({
                text: "Es necesario usuario y password para loguearse"
            });
        }
        else {
            const result = await Persona_1.Persona.findOne({
                where: {
                    email: email,
                    password: password
                }
            });
            if (result?.dataValues) {
                const token = jsonwebtoken_1.default.sign({ _id: result.dataValues.id }, process.env.SECRET_KEY);
                jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, _user) => {
                    if (err) {
                        res.status(500).send('Token denegado');
                    }
                    else {
                        next();
                    }
                });
                res.status(200).send({
                    text: "Usuario logueado con exito",
                    token: token,
                    id: result.dataValues.id
                });
            }
            else {
                res.status(500).send({
                    text: "Usuario o password invalidos"
                });
            }
        }
    }
}
exports.authController = new AuthController();
exports.default = exports.authController;
