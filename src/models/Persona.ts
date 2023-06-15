import {DataTypes} from 'sequelize';
import sequelize from '../database';

export const Persona = sequelize.define('persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    img: {
        type: DataTypes.STRING,
    },
    ocupacion: {
        type: DataTypes.STRING,
    },
    urlLinkedin: {
        type: DataTypes.STRING,
    },
    urlGithub: {
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
},{
    timestamps: false
})