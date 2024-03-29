"use client";
import { useCallback } from "react";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import {
  ICardPaymentBrickPayer,
  ICardPaymentFormData,
} from "@mercadopago/sdk-react/bricks/cardPayment/type";
import { handlePayment } from "./service";

initMercadoPago("ACCESS-KEY", {
  locale: "pt-BR",
});

export default function Home() {
  const handleSubmit = useCallback(
    async (param: ICardPaymentFormData<ICardPaymentBrickPayer>) => {
      await handlePayment(param);
    },
    []
  );

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <CardPayment
            initialization={{
              amount: 1,
            }}
            onSubmit={async (param) => handleSubmit(param)}
          />
        </div>
      </main>
    </>
  );
}
