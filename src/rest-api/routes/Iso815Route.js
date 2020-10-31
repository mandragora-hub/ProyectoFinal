const express = require('express');
module.exports = function (options = {}) {
    const { interface } = options
    const router = express.Router();

    const prefix = 'iso815'
    router.get(`/${prefix}`, async (req, res, next) => {
        // All route here
    });

    return router;
}
