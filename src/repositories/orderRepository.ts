import { injectable } from 'tsyringe';
import { Order } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() 
export default class OrderRepository {
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