// /validators/userValidator.js
import { body, validationResult } from 'express-validator';

export const registerValidationRules = () => {
    return [
        body('fullname').notEmpty().withMessage('Full name is required.'),
        body('email').isEmail().withMessage('Must be a valid email.'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
        body('role').optional().isIn(['admin', 'landlord', 'tenant', 'guest']).withMessage('Invalid role.')
    ];
};

export const loginValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Must be a valid email.'),
        body('password').notEmpty().withMessage('Password is required.')
    ];
};

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};