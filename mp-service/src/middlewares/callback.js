const { logger } = require('../lib/config/winston');

const callback = async (req, res, next, func) => {
    try {
        const resp = await func(req);
        if (resp.status >= 200 && resp.status <= 299) {
            const value = resp.message;
            const result = resp.result;
            if (typeof value === 'string') {
                return res.status(resp.status).send({ message: value, result });
            }
            if (Array.isArray(value)) {
                return res.status(resp.status).send(value);
            }
            return res.status(resp.status).send({ ...value, result });
        }
        res.status(resp.status).send(resp);
    } catch (e) {
        logger.error(e);
        next(e);
    }
};

module.exports.callback = callback;