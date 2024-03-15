const { MercadoPagoConfig, Payment } = require("mercadopago");

module.exports = async () => {
  const client = new MercadoPagoConfig({
    accessToken: "ACESS-TOKEN",
    options: { timeout: 5000, idempotencyKey: "abc" },
  });

  const payment = new Payment(client);

  return payment;
};
