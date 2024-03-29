import * as mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    IdInstitutoOK: {type: String, required: true},
    IdNegocioOK: {type: String, required: true},
    IdOrdenOK: {type: String, required: true},
    IdOrdenBK: {type: String, required: true},
    IdTipoOrdenOK: {type: String},
    IdRolOK: {type: String},
    IdPersonaOK: {type: String},
    ordenes_estatus: [
        {
            IdTipoEstatusOK: {type: String},
            Actual: {type: String},
            Observacion: {type: String},
            detail_row: {
                Activo: {type: String, default: "S"},
                Borrado: {type: String, default: "N"},
                detail_row_reg: [
                    {
                        FechaReg: {type: Date, default: Date.now},
                        UsuarioReg: {type: String},
                        _id: false,
                    },
                ],
                _id: false,
            },
            _id: false,
        },
    ],
    ordenes_info_ad: [
        {
            IdEtiquetaOK: {type: String},
            IdEtiqueta: {type: String, require: true},
            Etiqueta: {type: String, require: true},
            Valor: {type: String, require: true},
            IdTipoSeccionOK: {type: String, require: true},
            Secuencia: {type: Number, require: true},
            detail_row: {
                Activo: {type: String, default: "S"},
                Borrado: {type: String, default: "N"},
                detail_row_reg: [
                    {
                        FechaReg: {type: Date, default: Date.now},
                        UsuarioReg: {type: String},
                        _id: false,
                    },
                ],
                _id: false,
            },
            _id: false,
        },
    ],
    ordenes_detalle: [
        {
            IdProdServOK: {type: String, require: true},
            IdPresentaOK: {type: String, require: true},
            DesPresentaPS: {type: String},
            Cantidad: {type: Number},
            PrecioUniSinIVA: {type: Number},
            PrecioUniConIVA: {type: Number},
            PorcentajeIVA: {type: Number},
            MontoUniIVA: {type: Number},
            SubTotalSinIVA: {type: Number},
            SubTotalConIVA: {type: Number},
            pedidos_detalle_ps_estatus_f: [
                {
                    IdTipoEstatusOK: {type: String},
                    Actual: {type: String},
                    Observacion: {type: String},
                    detail_row: {
                        Activo: {type: String, default: "S"},
                        Borrado: {type: String, default: "N"},
                        detail_row_reg: [
                            {
                                FechaReg: {type: Date, default: Date.now},
                                UsuarioReg: {type: String},
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
            pedidos_detalle_ps_estatus_v: [
                {
                    IdTipoEstatusOK: {type: String},
                    Actual: {type: String},
                    Observacion: {type: String},
                    detail_row: {
                        Activo: {type: String, default: "S"},
                        Borrado: {type: String, default: "N"},
                        detail_row_reg: [
                            {
                                FechaReg: {type: Date, default: Date.now},
                                UsuarioReg: {type: String},
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
            pedidos_detalle_ps_estatus_u: [
                {
                    IdTipoEstatusOK: {type: String},
                    Actual: {type: String},
                    Observacion: {type: String},
                    detail_row: {
                        Activo: {type: String, default: "S"},
                        Borrado: {type: String, default: "N"},
                        detail_row_reg: [
                            {
                                FechaReg: {type: Date, default: Date.now},
                                UsuarioReg: {type: String},
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
            pedidos_detalle_ps_estatus_p: [
                {
                    IdTipoEstatusOK: {type: String},
                    Actual: {type: String},
                    Observacion: {type: String},
                    detail_row: {
                        Activo: {type: String, default: "S"},
                        Borrado: {type: String, default: "N"},
                        detail_row_reg: [
                            {
                                FechaReg: {type: Date, default: Date.now},
                                UsuarioReg: {type: String},
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
            pedidos_detalle_ps_info_ad: [
                {
                    IdTipoEstatusOK: {type: String},
                    Actual: {type: String},
                    Observacion: {type: String},
                    detail_row: {
                        Activo: {type: String, default: "S"},
                        Borrado: {type: String, default: "N"},
                        detail_row_reg: [
                            {
                                FechaReg: {type: Date, default: Date.now},
                                UsuarioReg: {type: String},
                                _id: false,
                            },
                        ],
                        _id: false,
                    },
                    _id: false,
                },
            ],
            _id: false,
        },
    ],
    detail_row: {
        Activo: {type: String, default: "S"},
        Borrado: {type: String, default: "N"},
        detail_row_reg: [
            {
                FechaReg: {type: Date, default: Date.now},
                UsuarioReg: {type: String},
                _id: false,
            },
        ],
        _id: false,
    },
}, {versionKey: false});

export default mongoose.model(
    'cat_orders',
    orderSchema,
    'cat_orders'
);