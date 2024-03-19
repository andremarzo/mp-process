import { useCallback } from "react";
import "./App.css";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import {
  ICardPaymentBrickPayer,
  ICardPaymentFormData,
} from "@mercadopago/sdk-react/bricks/cardPayment/type";
import { handlePayment } from "./service";

initMercadoPago("ACCESS-KEY", {
  locale: "pt-BR",
});

function App() {
  const handleSubmit = useCallback(
    async (param: ICardPaymentFormData<ICardPaymentBrickPayer>) => {
      await handlePayment(param);
      console.log("===============SEM ERROS AQUI===============");
    },
    []
  );

  return (
    <>
      <CardPayment
        initialization={{
          amount: 100,
        }}
        onSubmit={async (param) => handleSubmit(param)}
      />
    </>
  );
}

export default App;
