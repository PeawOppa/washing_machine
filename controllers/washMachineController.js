const uuid = require('uuid');
const fs = require('fs');
const washMachines = JSON.parse(fs.readFileSync('./db/washing_machine.json', 'utf8'));

const getWashingMachines = (req, res) => {
    res.json(washMachines);
};

const getWashingMachineById = (req, res) => {
    const found = washMachines.some(washMachine => washMachine.id === req.params.id);

    if(found){
        res.json(washMachines.filter(washMachine => washMachine.id === req.params.id));
    }else{
        res.status(400).json({ message: `No washing machine with the id of ${req.params.id}` });
    }
};

const createWashingMachine = (req, res) => {
    const newWashMachine = {
        id: uuid.v4(),
        name: req.body.name,
        status: false,
        coin: 0,
        start_at: null,
        end_at: null,
        noti: false
    };
    
    if(!newWashMachine.name){
         return res.status(500).json({ message: `Please include a name.` });
    }
 
    washMachines.push(newWashMachine);
    let json = JSON.stringify(washMachines);
    fs.writeFileSync('./db/washing_machine.json', json, 'utf-8');
    res.json(washMachines);
};

const updateWashingMachine = (req, res) => {
    const found = washMachines.some(washMachine => washMachine.id === req.params.id);
    
    if(found){
        const updateWash = req.body;
        washMachines.forEach(washMachine => {
            if(washMachine.id === req.params.id){
                washMachine.name = updateWash.name ? updateWash.name : washMachine.name;
                res.json({ message: 'Washing Machine updated', washMachine });
            }
        });
        let json = JSON.stringify(washMachines);
        fs.writeFileSync('./db/washing_machine.json', json, 'utf-8');
    }else{
        res.status(400).json({ message: `No washing Machine with the id of ${req.params.id}` });
    }
};

const deleteWashingMachine = (req, res) => {
    const found = washMachines.some(washMachine => washMachine.id === req.params.id);

    if(found){
        let deletedWash = washMachines.filter(washMachine => washMachine.id !== req.params.id);
        let json = JSON.stringify(deletedWash);
        fs.writeFileSync('./db/washing_machine.json', json, 'utf-8');
        res.json({
            message: "Washing Machine Deleted.",
            washMachine: deletedWash
        });
    }else{
        res.status(400).json({ message: `No washing Machine with the id of ${req.params.id}` });
    }
};

const insertCoin = (req, res) => {
    const found = washMachines.some(washMachine => washMachine.id === req.params.id);
    
    if(found){
        const updateWash = req.body;
        washMachines.forEach(washMachine => {
            if(washMachine.id === req.params.id){
                washMachine.coin = updateWash.coin ? updateWash.coin : washMachine.coin;
                res.json({ message: 'Coin updated' });
            }
        });
        let json = JSON.stringify(washMachines);
        fs.writeFileSync('./db/washing_machine.json', json, 'utf-8');
    }else{
        res.status(400).json({ message: `No washing Machine with the id of ${req.params.id}` });
    }
};

const updateTime = (req, res) => {
    const found = washMachines.some(washMachine => washMachine.id === req.params.id);

    if(found){
        let dateNow = new Date();
        let start_at = dateNow;
        let end_at = addHours(dateNow, 1);
        
        washMachines.forEach(washMachine => {
            if(washMachine.id === req.params.id){
                washMachine.status = true;
                washMachine.start_at = start_at;
                washMachine.end_at = end_at;
                washMachine.noti = true;
                res.json({ message: 'Time updated' });
            }
        });
        let json = JSON.stringify(washMachines);
        fs.writeFileSync('./db/washing_machine.json', json, 'utf-8');
    }else{
        res.status(400).json({ message: `No washing Machine with the id of ${req.params.id}` });
    }
};

const reset = (req, res) => {
    const found = washMachines.some(washMachine => washMachine.id === req.params.id);

    if(found){
        washMachines.forEach(washMachine => {
            if(washMachine.id === req.params.id){
                washMachine.status = false;
                washMachine.coin = 0;
                washMachine.start_at = null;
                washMachine.end_at = null;
                washMachine.noti = false;
            }
        });
        let json = JSON.stringify(washMachines);
        fs.writeFileSync('./db/washing_machine.json', json, 'utf-8');
        res.json(washMachines);
    }else{
        res.status(400).json({ message: `No washing Machine with the id of ${req.params.id}` });
    }
};

// util function
const addHours = (date, hours) => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
}

module.exports = {
    getWashingMachines,
    getWashingMachineById,
    createWashingMachine,
    updateWashingMachine,
    deleteWashingMachine,
    insertCoin,
    updateTime,
    reset
}