const { logger } = require("../lib/config/winston");

const responseWith = async (req, res, next, func) => {
  try {
    const resp = await func(req);
    if (resp.status >= 200 && resp.status <= 299) {
      res.status(resp.status).send(resp.result);
      return;
    }
    res.status(resp.status).send(resp.message);
  } catch (e) {
    logger.error(e);
    next(e);
  }
};

module.exports.responseWith = responseWith;
