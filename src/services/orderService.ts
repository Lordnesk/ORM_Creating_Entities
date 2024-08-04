// service is going to connect the controller with the repositories
import OrderRepository from '../repositories/orderRepository';
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import { Order } from '../models';

@injectable()
export default class ProductService {
    constructor(
        @inject(OrderRepository) private orderRepository: OrderRepository
    ) {}

    async getAllOrders() {
        return await this.orderRepository.findAll();
    }

    async getOrderById(id: number) {
        return await this.orderRepository.findById(id);
    }

    async getOrdersByUserId(userId: number) {
        return await this.orderRepository.findByUserId(userId);
    }

    async createOrder(order: CreationAttributes<Order>) {
        return await this.orderRepository.create(order);
    }
}
