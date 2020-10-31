// Import routes
const Iso815Route = require('./Iso815Route');
const MenuRoute = require('./MenuRoute')

// Configure route
const setRoute = (app, config = {}) => {
    app.use(Iso815Route({}))
    app.use(MenuRoute());

    //error handler
    app.use(function (err, req, res, next) {
        console.log(err.stack);
        if (err) {
            return res.status(500).json({ err: err })
        }
        return res.status(500).send('Internal Server Occurred');
    });
}
module.exports = setRoute;
