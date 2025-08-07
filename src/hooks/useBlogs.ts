import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import apiClient from "../utils/apiClient";

interface TranslatedField {
  ar: string;
  en: string;
}

export interface BlogItem {
  id: number;
  background: string;
  title: TranslatedField;
  text: TranslatedField;
  status: number;
  tags: string | null;
  details: string | null;
  cv: string;
}

interface BlogLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

interface BlogMetaLink {
  url: string | null;
  label: string;
  active: boolean;
}

interface BlogMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: BlogMetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface BlogsData {
  data: BlogItem[];
  links: BlogLinks;
  meta: BlogMeta;
}

interface BlogsResponse {
  data: BlogsData;
  status: string;
  error: string;
  code: number;
}

const useBlogs = (page: number) => {
  const { i18n } = useTranslation();

  return useQuery<BlogsResponse, AxiosError>({
    queryKey: ["blogs", i18n.language, page],
    queryFn: async () => {
      const response = await apiClient.get(`/api/frontend/blogs?page=${page}`);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useBlogs;
