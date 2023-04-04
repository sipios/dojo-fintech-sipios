import { useState } from "react";
import {
  postPayment,
  PostPaymentBody,
  PostPaymentResponse,
} from "../utils/post-payment";

interface PaymentModalProp {
  skinId: number;
  setShowModal: (showModal: boolean) => void;
}

export function PaymentModal({ skinId, setShowModal }: PaymentModalProp) {
  const [cardSerial, setCardSerial] = useState<string>("");
  const [paymentResponse, setPaymentResponse] = useState<PostPaymentResponse>();

  async function submitPayment(event: { preventDefault: () => void }) {
    event.preventDefault();
    const postPaymentBody: PostPaymentBody = {
      card_serial: cardSerial,
      skin_id: skinId,
    };
    setPaymentResponse(await postPayment(postPaymentBody));
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="block text-gray-700 text-sm font-bold mb-2">
            Skin #{skinId}
          </h1>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card_serial"
              type="text"
              placeholder="Card Serial"
              onChange={(inputCardSerial) => {
                setCardSerial(inputCardSerial.target.value);
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={submitPayment}
            >
              Submit
            </button>
            <div className="flex items-center justify-end p-6 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase text-sm ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
