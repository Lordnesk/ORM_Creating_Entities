import { Sequelize } from 'sequelize-typescript'; // We import sequelize so we can interact with mysqk with objects
import { User, Product, Order } from '../models'; // We import the models or in other words the structure of the tables

const sequelize: Sequelize = new Sequelize({ // We define sequilize as sequilize and how sequelize is going to work
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '123456789',
    database: 'orm_nodejs',
    models: [User, Product, Order], // We need to specify the models that going to be inside the db
});

export default sequelize; //Then we exports sequelize
