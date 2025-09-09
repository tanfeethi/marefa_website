import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import apiClient from "../utils/apiClient";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

interface ContactFormResponse {
  success: boolean;
  errorCode: number;
  status: number;
  notificationsCount: number;
  messages: string;
  data: {
    name: string;
    phone: string;
    email: string;
    message: string;
    updated_at: string;
    created_at: string;
    id: number;
  } | null;
}

const useContactForm = (options?: {
  onSuccess?: (data: ContactFormResponse) => void;
  onError?: (error: Error) => void;
}) => {
  return useMutation<ContactFormResponse, Error, ContactFormData>({
    mutationFn: async (formData: ContactFormData) => {
      const payload = {
        ...formData,
        subject: "Contact Us",
      };

      const response = await apiClient.post<ContactFormResponse>(
        "api/contact_us",
        payload
      );

      // ✅ Check success and throw if false
      if (!response.data.success) {
        throw new Error(response.data.messages || "فشل إرسال الرسالة");
      }

      return response.data;
    },
    onSuccess: (data) => {
      toast.success("تم إرسال الرسالة بنجاح", {
        position: "top-center",
      });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      toast.error(error.message || "فشل إرسال الرسالة", {
        position: "top-center",
      });
      options?.onError?.(error);
    },
  });
};

export default useContactForm;
