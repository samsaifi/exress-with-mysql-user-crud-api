const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController');

const { userValidationsRules } = require('./../validation/userValidation');

router.get('/user', (req, res) => { userController.get(req, res); });
router.get('/user/:id', (req, res) => { userController.find(req, res); });

router.post('/user', userValidationsRules(), (req, res) => { userController.post(req, res); });

router.put('/user/update/:id', userValidationsRules(), (req, res) => { userController.update(req, res); });

router.delete('/user/:id', (req, res) => { userController.delete(req, res); });


module.exports = router;