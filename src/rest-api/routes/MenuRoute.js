const express = require('express');

const { Helper } = require('../utils')
module.exports = function (options = {}) {
    const router = express.Router();
    router.get('/', (req, res) => {
        const menu = {
            obtener_tasa_de_cambio: `${Helper.HTTPUrl}/iso815`,
            consultar_el_indice_de_inflacion: `${Helper.HTTPUrl}/iso815`,
            consultar_la_salud_financiera: `${Helper.HTTPUrl}/iso815`, 
            consulta_uso_de_web_service: `${Helper.HTTPUrl}/iso815`
        }
        res.json(menu)
    });

    return router;
}
