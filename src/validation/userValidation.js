const { body } = require('express-validator');

const userValidationsRules = () => {
    return [
        body("name").notEmpty().isLength({ min: 3, max: 20 }).withMessage("Name must be at least 3 and 30 characters long"),
        body('age').notEmpty().isLength({ min: 1 }).withMessage("Age must be at least 1 character long"),
        body('address').notEmpty().isLength({ min: 3, max: 20 }).withMessage("Address must be at least 3 and 20 characters long")
    ];
};

module.exports = {
    userValidationsRules
};

