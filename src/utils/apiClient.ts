import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://192.168.1.15:8000",
    // baseURL: "https://ma3rfa.backend.tanfeethi.tanfeethi.com.sa",
});

apiClient.interceptors.request.use((config) => {
    const lang = localStorage.getItem("lang");
    if (lang) {
        config.headers["lang"] = lang;
    }
    return config;
});

export default apiClient;