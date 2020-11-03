const express = require('express');

const { Helper } = require('../utils')
module.exports = function (options = {}) {
    const router = express.Router();

    const prefix = 'iso815'
    router.get('/', (req, res) => {
        const menu = {
            obtener_tasa_de_cambio: `${Helper.HTTPUrl}/${prefix}/exchange/{currency}`,
            consultar_el_indice_de_inflacion: `${Helper.HTTPUrl}/${prefix}/inflation/{date}`,
            consultar_la_salud_financiera: `${Helper.HTTPUrl}/${prefix}/financial/{id}`,
            consulta_uso_de_web_service: `${Helper.HTTPUrl}/${prefix}/service/{id}`,
        }
        res.json(menu)
    });

    return router;
}
