"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experiencia = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Experiencia = database_1.default.define('experiencia', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_persona: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    nombreE: {
        type: sequelize_1.DataTypes.STRING,
    },
    empresaE: {
        type: sequelize_1.DataTypes.STRING,
    },
    descripcionE: {
        type: sequelize_1.DataTypes.STRING,
    },
    en_proceso: {
        type: sequelize_1.DataTypes.BOOLEAN,
    }
}, {
    timestamps: false
});
