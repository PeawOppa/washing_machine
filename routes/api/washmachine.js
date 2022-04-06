const express = require('express');
const router = express.Router();
const controller = require('../../controllers/index');

// get all washing machine
router.get('/', controller.washMachineController.getWashingMachines);

// get washing machine by id
router.get('/:id', controller.washMachineController.getWashingMachineById);

// create washing machine
router.post('/', controller.washMachineController.createWashingMachine);

// update washing machine
router.put('/:id', controller.washMachineController.updateWashingMachine);

// delete user
router.delete('/:id', controller.washMachineController.deleteWashingMachine);

// insert coin
router.put('/insert_coin/:id', controller.washMachineController.insertCoin);

// update time
router.get('/update_time/:id', controller.washMachineController.updateTime);

// reset washing machine
router.get('/reset/:id', controller.washMachineController.reset);

module.exports = router;