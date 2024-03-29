//Commerce
import {Router} from 'express';
import * as orderController from '../controllers/orders.controller';

const router = Router();

router.get('/:id', orderController.getOrderOne);
router.get('/', orderController.getOrdersAll);
router.put('/:id', orderController.putOrderItem);
router.delete('/:id', orderController.deleteOrderItem);
router.post('/', orderController.postOrderItem);
export default router;