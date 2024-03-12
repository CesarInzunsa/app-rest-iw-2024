import * as InstitutosServices from '../services/institutos.service';
import boom from '@hapi/boom';

//FIC: API GET
//---------------------------------------- Regresa
//FIC: Todos los Productos/Servicios. request , respond, pide y devuelve
export const getInstitutosList = async (req, res, next) => {
    try {
        const InstitutosList = await InstitutosServices.getInstitutosList();
        if (!InstitutosList) {
            throw boom.notFound('No se encontraron productos/servicios registrados.');
        } else if (InstitutosList) {
            res.status(200).json(InstitutosList);
        }

    } catch (error) {
        next(error);
    }
};

//FIC: Solo un Producto/Servicio.
export const getInstitutosItem = async (req, res, next) => {
    try {
        //FIC: obtener parametro id mediante la
        //desestructuracion de objetos
        const {id} = req.params;
        //FIC: se obtiene parametro de la forma
        //clase/objeto.
        //const idProdServ = req.params.id;
        const keyType = req.query.keyType || 'OK';
        const InstitutosItem = await InstitutosServices.getInstitutosItem(id, keyType);
        if (!InstitutosItem) {
            throw boom.notFound('No se encontraron productos/servicios registrados.');
        } else if (InstitutosItem) {
            res.status(200).json(InstitutosItem);
        }
    } catch (error) {
        next(error);
    }
};

//FIC: API POST (ADD) Producto y/o Servicio.
export const postInstitutosItem = async (req, res, next) => {
    try {
        const paInstitutoItem = req.body;
        const newInstitutoItem = await InstitutosServices.postInstitutoItem(paInstitutoItem);
        if (!newInstitutoItem) {
            throw boom.badRequest('No se pudo crear el Producto y/o Servicio.');
        } else if (newInstitutoItem) {
            res.status(201).json(newInstitutoItem);
        }
    } catch (error) {
        //console.log(error);
        next(error);
    }
};

export const putInstitutoItem = async (req, res, next) => {
    try {
        const {id} = req.params;
        //console.log('FIC: controller id -> ', id);
        const paInstitutoItem = req.body;
        //console.log('FIC: controller body -> ', paInstitutoItem);
        const updatedInstitutoItem = await InstitutosServices.putInstitutoItem(id, paInstitutoItem);
        if (!updatedInstitutoItem) {
            throw boom.badRequest('No se pudo actualizar el Instituto.');
        } else if (updatedInstitutoItem) {
            res.status(200).json(updatedInstitutoItem);
        }
    } catch (error) {
        next(error);
    }
};


export const deleteInstitutoItem = async (req, res, next) => {
    try {
        //FIC: obtener parametro id mediante la
        //desestructuracion de objetos
        const {id} = req.params;
        const InstitutosItem = await InstitutosServices.deleteInstitutoItem(id);
        if (!InstitutosItem) {
            throw boom.notFound('No se encontraron productos/servicios registrados.');
        } else if (InstitutosItem) {
            res.status(200).json(InstitutosItem);
        }
    } catch (error) {
        next(error);
    }
};