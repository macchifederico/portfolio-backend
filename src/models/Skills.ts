import {DataTypes} from 'sequelize';
import sequelize from '../database';

export const Skills = sequelize.define('skills', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tecnologia: {
        type: DataTypes.STRING,
    },
    porcentajes: {
        type: DataTypes.INTEGER,
    }
},{
    timestamps: false
})
