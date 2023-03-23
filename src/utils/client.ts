import axios from "axios";
import { environment } from "./environment";

export const apiClient = axios.create({
    baseURL: environment.host,
    headers: {
        'x-auth-token': environment.playerToken
    }
});