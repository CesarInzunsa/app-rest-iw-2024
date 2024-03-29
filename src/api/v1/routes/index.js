//Commerce
import { Router } from 'express';
import config from '../../../config/config';
// Import Routes
import prodServRoutes from './prodServ.routes';

const routerAPI = (app) => {
  const router = Router();
  const api = config.URL_BASE;
  app.use(api, router);
  // Routes
  router.use('/prod-serv', prodServRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;