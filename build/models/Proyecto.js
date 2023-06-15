"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyecto = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Proyecto = database_1.default.define('proyecto', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreProyecto: {
        type: sequelize_1.DataTypes.STRING,
    },
    descrProyecto: {
        type: sequelize_1.DataTypes.STRING,
    },
    urlProyecto: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    timestamps: false
});
