//Commerce
import {Router} from 'express';
import * as prodServController from '../controllers/prodserv.controller';

const router = Router();

router.get('/', prodServController.getProdServAll);
router.get('/:id', prodServController.getProdServIOne);
router.put('/:id', prodServController.putProdServItem);
router.delete('/:id', prodServController.deleteProdServItem);
router.post('/', prodServController.postProdServItem);
export default router;