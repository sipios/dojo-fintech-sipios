import axios from "axios";
import { environment } from "./environment";

export const apiClient = axios.create({
    withCredentials: true,
});

apiClient.defaults.headers.common['x-auth-token'] = environment.playerToken;
apiClient.defaults.baseURL = environment.host;