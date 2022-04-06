const washingMachineRoute = require('./api/washmachine');
const showRoute = require('./web/washmachine');

const apiRoutes = (app) => {
    app.use('/api/washing', washingMachineRoute);
}

const webRoutes = (app) => {
    app.use('/', showRoute);
}

module.exports = {
    apiRoutes,
    webRoutes
}