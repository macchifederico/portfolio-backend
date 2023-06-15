import { DataTypes } from 'sequelize';
import sequelize from '../database';

export const AcercaDe = sequelize.define('acercade', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    presentProf: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
})