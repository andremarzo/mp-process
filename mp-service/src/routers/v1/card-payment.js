// const axios = require("axios");
const connect = require("../../lib/mp-connect");

module.exports = async (req) => {
  try {
    console.log("running api");
    const body = req.body;

    console.log("BODY: ", JSON.stringify(body));

    const client = await connect();

    console.log("client connected: ", client);

    const result = await client.create({ body });

    if (result.status === "rejected") {
      return {};
    }

    console.log("result: ", result);

    return {
      status: 200,
      result,
    };
  } catch (e) {
    return {
      status: 500,
      message: e,
    };
  }
};
