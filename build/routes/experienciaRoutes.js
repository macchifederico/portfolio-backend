"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//agregar controlador
class ExperienciaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/'); // experienciaController.get
        this.router.post('/'); // experienciaController.save
        this.router.put('/:id'); // experienciaController.update
        this.router.delete('/:id'); // experienciaController.delete
    }
}
const experienciaRoutes = new ExperienciaRoutes();
exports.default = experienciaRoutes;
