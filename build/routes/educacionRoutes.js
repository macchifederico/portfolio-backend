"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const educacionController_1 = __importDefault(require("../controllers/educacionController"));
const tokenService_1 = __importDefault(require("../services/tokenService"));
class EducacionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tokenService_1.default.verifyToken, educacionController_1.default.getAllEducacionPersona);
        this.router.get('/:id', tokenService_1.default.verifyToken, educacionController_1.default.getUnaEducacion);
        this.router.post('/', tokenService_1.default.verifyToken, educacionController_1.default.createEducacion);
        this.router.put('/', tokenService_1.default.verifyToken, educacionController_1.default.updateEducacion);
        this.router.delete('/', tokenService_1.default.verifyToken, educacionController_1.default.deleteEducacion);
    }
}
const educacionRoutes = new EducacionRoutes();
exports.default = educacionRoutes.router;
