import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//FIC: imports Swagger

//FIC: imports Routes
import routeAPIV1ProdServ from './api/v1/routes/index';
import routesOrdersV2 from './api/v2/routes/index';

//FIC: imports Middlewares

//FIC: Config para variables de entorno
import config from './config/config';

//FIC: Declaramos la variable app igualándola a express
const app = express();

//FIC: Establece la conexión a la BD
import {mongoose} from './config/database.config';

//FIC: Settings
app.set('port', config.PORT);

//FIC: Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//FIC: Routes
const api = config.URL_BASE;
app.get(`${api}`, (req, res) => {
    res.send(
        `<h1>RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/DrFIC', (req, res) => {
    res.send(
        `<h1>RESTful running in DrFIC</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})

// Routes
routeAPIV1ProdServ(app);
routesOrdersV2(app);
// Import Routes
// Swagger Docs
// Middleware para el manejo de errores
// Export App
export default app;