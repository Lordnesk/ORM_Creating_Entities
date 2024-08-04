// src/controllers/ProductController.ts
import { Request, Response } from 'express'; // We import request and response use to type
import { container } from 'tsyringe'; // We import the instance of the service
import OrderService from '../services/orderService'; // We import the service of order

export default class OrderController { // We export as default the class that is going to contain the main services
    static async getAllOrders(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }

    static async getOrderById(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const order = await orderService.getOrderById(parseInt(req.params.id));
        res.json(order);
    }

    static async getOrdersByUserId(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const orders = await orderService.getOrdersByUserId(parseInt(req.params.userId));
        res.json(orders);
    }

    static async createOrder(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    }
}
