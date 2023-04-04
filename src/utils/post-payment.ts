import axios from "axios";
import { environment } from "./environment";

export interface PostPaymentBody {
  skin_id: number;
  card_serial: string;
}

export interface PostPaymentResponse {
  success: boolean;
  message: string;
  status_code: number;
  decode_me: boolean;
}

export const postPayment = async (
  body: PostPaymentBody
): Promise<PostPaymentResponse> => {
  return await axios
    .post(`${environment.host}/api/payment`, body, {
      headers: {
        "x-auth-token": environment.playerToken,
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return {
        success: true,
        message: "Good Job !",
        status_code: response.status,
        decode_me: response?.headers?.["decode-me"],
      };
    })
    .catch((error) => {
      return {
        success: false,
        message: error.response.data.message,
        status_code: error.response.status,
        decode_me: false,
      };
    });
};