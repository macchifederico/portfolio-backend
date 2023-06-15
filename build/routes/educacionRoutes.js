"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//agregar controlador
class EducacionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/'); // educacionController.get
        this.router.post('/'); // educacionController.save
        this.router.put('/:id'); // educacionController.update
        this.router.delete('/:id'); // educacionController.delete
    }
}
const educacionRoutes = new EducacionRoutes();
exports.default = educacionRoutes;
