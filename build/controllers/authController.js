"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Persona_1 = require("../models/Persona");
class AuthController {
    registro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(500).send({
                    text: "Es necesario usuario y password para loguearse"
                });
            }
            else {
                const result = yield Persona_1.Persona.findOne({
                    where: {
                        email: email,
                        password: password
                    }
                });
                if (result === null || result === void 0 ? void 0 : result.dataValues) {
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
        });
    }
}
exports.authController = new AuthController();
exports.default = exports.authController;
