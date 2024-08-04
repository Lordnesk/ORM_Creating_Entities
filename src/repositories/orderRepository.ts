import { injectable } from 'tsyringe'; // With this library we are going to be able to inject clases in other clases
import { Order } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() // This decorator is to say what we need to insert
export default class OrderRepository { // This class is going to cointain the secundary services of the controller
    async findAll() {
        return await Order.findAll();
    }

    async findById(id: number) {
        return await Order.findByPk(id);
    }

    async findByUserId(userId: number) {
        return await Order.findAll({ where: { userId } });
    }

    async create(order: CreationAttributes<Order>) {
        return await Order.create(order);
    }
}