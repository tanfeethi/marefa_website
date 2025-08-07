import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import apiClient from "../utils/apiClient";

interface UseContactForm {
    name: string;
    email: string;
    phone: string;
    subject: string;
    massage: string;
}

interface ErrorResponse {
    message?: string;
}

const useContactForm = () => {
    return useMutation<UseContactForm, AxiosError<ErrorResponse>, UseContactForm>({
        mutationFn: async (formData: UseContactForm) => {
            const response = await apiClient.post("/api/contactUs/sendMail", formData);
            return response.data;
        },
        onSuccess: (data: any) => {
            console.log("success=>", data.message || "Message sent");
            toast.success("تم إرسال الرسالة بنجاح");
        },
        onError: (error) => {
            console.error("Error sending contact form:", error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || "فشل إرسال الرسالة");
        },
    });
};

export default useContactForm;