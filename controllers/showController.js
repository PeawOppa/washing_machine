const fs = require('fs');
const washMachines = JSON.parse(fs.readFileSync('./db/washing_machine.json', 'utf8'));

const indexPage = (req, res) => {
    res.render('index', {washMachines});
};

module.exports = {
    indexPage
}