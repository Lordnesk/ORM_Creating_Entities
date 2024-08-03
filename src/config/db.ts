import { Sequelize } from 'sequelize-typescript';
import { User, Product, Order } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '123456789',
    database: 'orm_nodejs',
    models: [User, Product, Order], // Añade todos tus modelos aquí
});

export default sequelize;
