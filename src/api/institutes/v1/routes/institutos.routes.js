//Commerce
import {Router} from 'express';
import * as institutosController from '../controllers/institutos.controller';

const router = Router();

router.get('/', institutosController.getInstitutosList);
router.get('/:id', institutosController.getInstitutosItem);
router.put('/:id', institutosController.putInstitutoItem);
router.delete('/:id', institutosController.deleteInstitutoItem);
router.post('/', institutosController.postInstitutosItem);
export default router;