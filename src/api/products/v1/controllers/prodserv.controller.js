import * as ProdServServices from '../services/prodServ.service';
import boom from '@hapi/boom';

//FIC: API GET
//----------------------------------------
//FIC: Todos los Productos/Servicios.
export const getProdServAll = async (req, res, next) => {
    try {
        const prodServAll = await ProdServServices.getProdServAll();
        if (!prodServAll) {
            throw boom.notFound('No se encontraron productos/servicios registrados.');
        } else if (prodServAll) {
            res.status(200).json(prodServAll);
        }

    } catch (error) {
        next(error);
    }
};

//FIC: Solo un Producto/Servicio.
export const getProdServIOne = async (req, res, next) => {
    try {
        //FIC: obtener parametro id mediante la
        //desestructuracion de objetos
        const {id} = req.params;
        //FIC: se obtiene parametro de la forma
        //clase/objeto.
        //const idProdServ = req.params.id;
        const keyType = req.query.keyType || 'OK';
        const prodServOne = await ProdServServices.getProdServOne(id, keyType);
        if (!prodServOne) {
            throw boom.notFound('No se encontraron productos/servicios registrados.');
        } else if (prodServOne) {
            res.status(200).json(prodServOne);
        }
    } catch (error) {
        next(error);
    }
};

export const deleteProdServItem = async (req, res, next) => {
    try {
        //FIC: obtener parametro id mediante la
        //desestructuracion de objetos
        const {id} = req.params;
        const ProdServItem = await ProdServServices.deleteProdServItem(id);
        if (!ProdServItem) {
            throw boom.notFound('No se encontraron productos/servicios registrados.');
        } else if (ProdServItem) {
            res.status(200).json(ProdServItem);
        }
    } catch (error) {
        next(error);
    }
};
//FIC: API POST (ADD) Producto y/o Servicio.
export const postProdServItem = async (req, res, next) => {
    try {
        const paProdServItem = req.body;
        const newProdServItem = await ProdServServices.postProdServItem(paProdServItem);
        if (!newProdServItem) {
            throw boom.badRequest('No se pudo crear el Producto y/o Servicio.');
        } else if (newProdServItem) {
            res.status(201).json(newProdServItem);
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const putProdServItem = async (req, res, next) => {
    try {
        const {id} = req.params;
        const puProdServItem = req.body;
        const updatedProdServItem = await ProdServServices.putProdServItem(id, puProdServItem);
        if (!updatedProdServItem) {
            throw boom.badRequest('¡No se pudo actualizar el producto/servicio!');
        } else if (updatedProdServItem) {
            res.status(200).json(updatedProdServItem);
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};