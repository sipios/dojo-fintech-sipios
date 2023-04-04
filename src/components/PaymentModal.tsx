import { useState } from "react";
import { postPayment, PostPaymentBody } from "../utils/post-payment";

interface PaymentModalProp {
  skinId: number;
  setShowModal: (showModal: boolean) => void;
}

export function PaymentModal({ skinId, setShowModal }: PaymentModalProp) {
  const [cardSerial, setCardSerial] = useState<string>("");

  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"></form>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="card_serial"
        >
          Card Serial
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="card_serial"
            type="text"
            placeholder="Card Serial"
            onChange={(inputCardSerial) => {
              setCardSerial(inputCardSerial.target.value);
            }}
          />
        </label>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(event) => {
            event.preventDefault();
            const postPaymentBody: PostPaymentBody = {
              card_serial: cardSerial,
              skin_id: skinId,
            };
            postPayment(postPaymentBody);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
