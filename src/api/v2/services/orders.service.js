//Commerce
import OrderModel from '../models/Order';
import boom from '@hapi/boom';

// GET ALL ORDERS
export const getOrdersAll = async () => {
    let ordersList;
    try {
        ordersList = await OrderModel.find();
        return (ordersList);
    } catch (error) {
        throw boom.internal(error);
    }
};

// GET ORDER BY ID
export const getOrderOne = async (id, keyType) => {
    let orderItem;

    try {
        if (keyType === 'OK') {
            orderItem = await OrderModel.findOne({
                IdOrdenOK: id,
            });
        } else if (keyType === 'BK') {
            orderItem = await OrderModel.findOne({
                IdOrdenBK: id,
            });
        }
        return (orderItem);
    } catch (error) {
        throw boom.internal(error);
    }
};

// DELETE ORDER
export const deleteOrderItem = async (id) => {
    let orderItem;
    try {
        orderItem = await OrderModel.deleteOne({
            IdOrdenOK: id,
        });
        return (orderItem);
    } catch (error) {
        throw boom.internal(error);
    }
};

// POST (CREATE) ORDER
export const postOrderItem = async (orderItem) => {
    try {
        const newOrderItem = new OrderModel(orderItem);
        return await newOrderItem.save();
    } catch (error) {
        throw error;
    }
};

// PUT (UPDATE) ORDER
export const putOrderItem = async (id, orderItem) => {
    try {
        return await OrderModel.findOneAndUpdate({IdOrdenOK: id}, orderItem, {
            new: true
        });
    } catch (error) {
        throw boom.badImplementation(error);
    }
};