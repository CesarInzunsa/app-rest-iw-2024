//Commerce
import {Router} from 'express';
import config from '../../../config/config';
// Import Routes
import ordersRoutes from './orders.routes';

const routerAPI = (app) => {
    const router = Router();
    const api = config.URL_BASE;
    app.use(api, router);
    // Routes
    router.use('/orders', ordersRoutes);
    return router;
};
module.exports = routerAPI;