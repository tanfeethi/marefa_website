import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqsResponse {
  data: FAQ[];
  status: string;
  error?: string;
  code: number;
}

const useFaqs = () => {
  const { i18n } = useTranslation();

  return useQuery<FaqsResponse, AxiosError<{ error: string }>>({
    queryKey: ["faqs", i18n.language],
    queryFn: async () => {
      const response = await apiClient.get("/api/frontend/faqs");
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useFaqs;
