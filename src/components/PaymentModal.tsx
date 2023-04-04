import { useState } from "react";
import { postPayment, PostPaymentBody } from "../utils/post-payment";

interface PaymentModalProp {
  skinId: number;
}

export function PaymentModal({ skinId }: PaymentModalProp) {
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"></form>
    </>
  );
}
