// Required
const express = require('express');
const path = require('path');
const config = require('./config/index');
const router = require('./routes/index');
require('./cron/index');

const app = express();

// Set default / middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, 'public')));

router.apiRoutes(app);
router.webRoutes(app);

app.use((req, res) => { res.status(404).json({ message: `${req.originalUrl} not found.` }) });

try {
    app.listen(config.port, config.host, () => { console.log(`Server started on : http://${config.host}:${config.port}`) });
} catch(err) {
    throw err;
}