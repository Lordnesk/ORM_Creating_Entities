import { Router } from 'express';
import {userRouter, productRouter, orderRouter} from './';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);

export default router;
