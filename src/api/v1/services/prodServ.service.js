//Commerce
import ProdServ from '../models/ProdServ';
import boom from '@hapi/boom';

//FIC: GET PRODUCTS AND SERVICES LIST
export const getProdServAll = async () => {
    let prodServList;
    try {
        prodServList = await ProdServ.find();
        return (prodServList);
    } catch (error) {
        //res.status(500).json({ message: 'Error: ' + ficError });
        throw boom.internal(error);
    }
};

//FIC: GET PRODUCT OR SERVICE BY ID
export const getProdServOne = async (id, keyType) => {
    let prodServItem;

    try {
        if (keyType === 'OK') {
            prodServItem = await ProdServ.findOne({
                IdProdServOK: id,
            });
        } else if (keyType === 'BK') {
            prodServItem = await ProdServ.findOne({
                IdProdServBK: id,
            });
        }
        return (prodServItem);
    } catch (error) {
        throw boom.internal(error);
    }
};

export const deleteProdServItem = async (id) => {
    let prodServItem;
    try {
        prodServItem = await ProdServ.deleteOne({
            IdProdServOK: id,
        });
        return (prodServItem);
    } catch (error) {
        throw boom.internal(error);
    }
};

// POST (ADD) Productos y/o Servicios.
export const postProdServItem = async (paProdServItem) => {
    try {
        const newProdServItem = new ProdServ(paProdServItem);
        return await newProdServItem.save();
    } catch (error) {
        throw error;
    }
};

// PUT (MODIFY) INSTITUTOS
export const putProdServItem = async (id, puProdServItem) => {
    try {
        return await ProdServ.findOneAndUpdate({IdProdServOK: id}, puProdServItem, {
            new: true
        });
    } catch (error) {
        throw boom.badImplementation(error);
    }
};