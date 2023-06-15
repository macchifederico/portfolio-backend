"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//agregar controlador
class ProyectoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/'); // proyectoController.get
        this.router.post('/'); // proyectoController.save
        this.router.put('/:id'); // proyectoController.update
        this.router.delete('/:id'); // proyectoController.delete
    }
}
const proyectoRoutes = new ProyectoRoutes();
exports.default = proyectoRoutes;
