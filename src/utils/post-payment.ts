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

export const postPayment = async (body: PostPaymentBody) => {
     await axios.post(`${environment.host}/api/payment`, body, {
        headers: {
            'x-auth-token': environment.playerToken
        }
    });
}