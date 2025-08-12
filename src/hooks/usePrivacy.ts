import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export interface MultilingualField {
    ar: string;
    en: string;
}

export interface PrivacyPolicy {
    id: number;
    name: MultilingualField;
    content: MultilingualField;
}

const getPrivacyPolicy = async (): Promise<PrivacyPolicy> => {
    const res = await apiClient.get<{ data: PrivacyPolicy }>("api/static_pages/privacy");
    return res.data.data;
};

export const usePrivacy = () => {
    return useQuery({
        queryKey: ["privacyPolicy"],
        queryFn: getPrivacyPolicy,
        staleTime: 0,
        retry: 3,
        refetchOnWindowFocus: false,
    });
};