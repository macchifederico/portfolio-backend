"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Skills = database_1.default.define('skills', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tecnologia: {
        type: sequelize_1.DataTypes.STRING,
    },
    porcentajes: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    timestamps: false
});
