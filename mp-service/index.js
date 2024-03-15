const express = require("express");
const { logger } = require("./src/lib/config/winston");
const app = express();
const { routers } = require("./src/index");
const { PORT = 7000 } = process.env;
const cors = require("cors");

app.use(cors());

app.listen(PORT, () => {
  logger.debug(`PORT ${PORT}`);
});

// parser json
app.use(
  express.json({
    limit: "5mb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);

routers(app);

app.use((_req, res, _next) => {
  res.status(500);
  res.send({
    status: 500,
    code: "MS0001",
    message: "Erro inexperado. Tente novamente.",
  });
});
