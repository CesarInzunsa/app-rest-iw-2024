//Commerce
import {Router} from 'express';
import * as prodServController from '../controllers/prodserv.controller';

const router = Router();

router.get('/', prodServController.getProdServList);
router.get('/:id', prodServController.getProdServItem);
router.put('/:id', prodServController.putProdServItem);
router.delete('/:id', prodServController.deleteProdServItem);
router.post('/', prodServController.postProdServItem);
export default router;