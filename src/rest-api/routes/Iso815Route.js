const express = require('express');

///firebase
const admin = require('firebase-admin');
const serviceAccount = require('../cert/iso-815-e60758a0d86a.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
////////


module.exports = function (options = {}) {
    const { interface } = options
    const router = express.Router();

    const prefix = 'iso815'
    router.get(`/${prefix}/exchange/:currency`, async (req, res, next) => {
        const currency = req.params.currency;
        if (currency) {
            const doc = await db.collection('exchange rate').doc(currency).get();
            if (!doc.exists) {
                return res.json('No such document')
            } else {
                return res.json(doc.data());
            }
        }
        res.json('currency is not defined') 
    });

    router.get(`/${prefix}/financial/:id`, async (req, res, next) => {
        const id = req.params.id;
        if (id) {
            const doc = await db.collection('financial health').doc(id).get();
            if (!doc.exists) {
                return res.json('No such document')
            } else {
                return res.json(doc.data());
            }
        }
        res.json('financial is not defined') 
    });

    router.get(`/${prefix}/inflation/:date`, async (req, res, next) => {
        const date = req.params.date;
        if (date) {
            const doc = await db.collection('inflation index').doc(date).get();
            if (!doc.exists) {
                return res.json('No such document')
            } else {
                return res.json(doc.data());
            }
        }
        res.json('date index is not defined') 
    });

    router.get(`/${prefix}/service/:id`, async (req, res, next) => {
        const id = req.params.id;
        if (id) {
            const doc = await db.collection('web service use').doc(id).get();
            if (!doc.exists) {
                return res.json('No such document')
            } else {
                return res.json(doc.data());
            }
        }
        res.json('id is not defined') 
    });

    return router;
}
