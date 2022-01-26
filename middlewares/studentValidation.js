const { check, validationResult } = require("express-validator");

exports.studentValidation= () => [
    
    check('name','name is required').notEmpty(),
    check('forename','forename is required').notEmpty(),
    check('birthday','birthday is required').notEmpty(),
    check('section','section is required').notEmpty(),
    check('cin','cin is required').notEmpty(),
    check('professor','professor is required').notEmpty(),
    check('sujet','sujet is required').notEmpty(),
    check('credit','credit is required').notEmpty(),
    check('paid','paid is required').notEmpty(),
];
exports.validation=(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    next()
}