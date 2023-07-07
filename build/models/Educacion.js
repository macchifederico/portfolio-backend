"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Educacion = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Educacion = database_1.default.define('educacion', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_persona: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
    },
    institucion: {
        type: sequelize_1.DataTypes.STRING,
    },
    fechaInicio: {
        type: sequelize_1.DataTypes.DATE,
    },
    fechaFin: {
        type: sequelize_1.DataTypes.DATE,
    },
    en_proceso: {
        type: sequelize_1.DataTypes.BOOLEAN,
    }
}, {
    timestamps: false,
    tableName: "educacion"
});
