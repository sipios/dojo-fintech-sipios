import {useEffect, useState} from "react";
import {apiClient} from "../utils/client";
import {Skin} from "../types/skin.type";
import {AxiosError} from "axios";

export const useSkins = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<AxiosError>();
    const [skins, setSkins] = useState<Skin[]>([]);

    const fetchSkins = async () => {
        setIsLoading(true);
        try {
            const result = await apiClient.get('/skins');
            setSkins(result.data);
        } catch (e) {
            setError(e as AxiosError);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSkins();
    }, []);

    return {isLoading, error, skins};
}