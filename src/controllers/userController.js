const user = require('./../models/user');

const { query, validationResult } = require('express-validator');

module.exports = {
    post: async (req, res) => {
        try {

            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(404).json({ message: errors.array(), body: req.body });
            }
            const { name, address, age } = req.body;
            const newUser = await user.create({ name: name, address: address, age: age });

            res.status(200).json(newUser);
        } catch (err) {
            console.error("Error ceating User", err);
            res.status(404).json({ message: err.message });
        }
    },
    get: async (req, res) => {
        try {
            const users = await user.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    find: async (req, res) => {
        try {
            const id = req.params.id;
            const users = await user.findAll({
                where: {
                    id
                }
            });

            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(404).json({ message: errors.array() });
            }

            const id = req.params.id;
            const { name, address, age } = req.body;


            const checkUser = await user.findAll({
                where: {
                    id
                }
            });
            if (!checkUser) {
                return res.status(404).json({ message: "User Could't found" })
            }
            const updateUser = await user.update({ name, address, age }, { where: { id } });
            return res.status(200).json({ updateUser });
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const checkUser = await user.findAll({
                where: {
                    id
                }
            });
            if (!checkUser) {
                return res.status(404).json({ message: "User could not be found" });
            }
            await user.destroy({
                where: {
                    id
                },
                force: true
            });


            return res.status(200).json({ message: "User successfully deleted" });
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },

}