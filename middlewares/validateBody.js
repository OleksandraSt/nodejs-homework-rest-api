const {HttpError} = require("../helpers");

const validateBody = schema => {
    const func = (req, res, next)=> {
        const { error } = schema.validate(req.body);
        if (error) {
            const field = error.details[0].path;
            const emptyField = field.length === 0;

            next(HttpError(400,
                emptyField ? 'missing fields' : `missing field ${field}`));
        }
        next()
    }

    return func;
}

module.exports = validateBody;