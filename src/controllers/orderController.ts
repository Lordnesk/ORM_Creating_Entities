// src/controllers/ProductController.ts
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import OrderService from '../services/orderService';

export default class OrderController {
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
