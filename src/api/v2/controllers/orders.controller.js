import * as orderServices from '../services/orders.service';
import boom from '@hapi/boom';

// Obtener todas las ordenes
export const getOrdersAll = async (req, res, next) => {
    try {
        const ordersAll = await orderServices.getOrdersAll();
        if (!ordersAll) {
            throw boom.notFound('No se encontraron ordenes registradas.');
        } else if (ordersAll) {
            res.status(200).json(ordersAll);
        }
    } catch (error) {
        next(error);
    }
};

// Obtener una orden por ID
export const getOrderOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const keyType = req.query.keyType || 'OK';
        const orderOne = await orderServices.getOrderOne(id, keyType);
        if (!orderOne) {
            throw boom.notFound('No se encontraron ordenes registradas.');
        } else if (orderOne) {
            res.status(200).json(orderOne);
        }
    } catch (error) {
        next(error);
    }
};

// Eliminar una orden por ID
export const deleteOrderItem = async (req, res, next) => {
    try {
        const {id} = req.params;
        const orderItem = await orderServices.deleteOrderItem(id);
        if (!orderItem) {
            throw boom.notFound('No se encontraron ordenes registradas.');
        } else if (orderItem) {
            res.status(200).json(orderItem);
        }
    } catch (error) {
        next(error);
    }
};


// Crear una orden
export const postOrderItem = async (req, res, next) => {
    try {
        const orderItem = req.body;
        const newOrderItem = await orderServices.postOrderItem(orderItem);
        if (!newOrderItem) {
            throw boom.badRequest('No se pudo crear la orden.');
        } else if (newOrderItem) {
            res.status(201).json(newOrderItem);
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Actualizar una orden
export const putOrderItem = async (req, res, next) => {
    try {
        const {id} = req.params;
        const orderItem = req.body;
        const updatedOrderItem = await orderServices.putOrderItem(id, orderItem);
        if (!updatedOrderItem) {
            throw boom.badRequest('¡No se pudo actualizar la orden!');
        } else if (updatedOrderItem) {
            res.status(200).json(updatedOrderItem);
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};