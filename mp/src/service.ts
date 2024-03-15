export const handlePayment = async (body: any) => {
  fetch("http://127.0.0.1:7000/api/v1/card-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => console.log("RESPONSE: ", res))
    .catch((err) => console.log("Error: ", err));
};
