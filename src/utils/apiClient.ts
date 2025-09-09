import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://backend.maarefa.app/",
});

apiClient.interceptors.request.use((config) => {
  const lang = "ar";
  if (lang) {
    config.headers["accept-language"] = lang;
    config.headers["lang"] = lang;
  }
  return config;
});

export default apiClient;
