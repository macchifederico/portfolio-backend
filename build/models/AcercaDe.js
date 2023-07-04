"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcercaDe = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.AcercaDe = database_1.default.define('acercade', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_persona: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    presentProf: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
