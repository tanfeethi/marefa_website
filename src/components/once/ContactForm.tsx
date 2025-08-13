import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import useContactForm from "../../hooks/useContactForm";

const ContactForm = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        massage: "",
    });

    const { mutate, isPending } = useContactForm({
        onSuccess: () => {
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                massage: "",
            });
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const fullName = `${form.firstName} ${form.lastName}`;
        mutate({
            name: fullName.trim(),
            email: form.email,
            phone: form.phone,
            massage: form.massage,
        });
    };

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="border border-[#F197041A] rounded-xl p-6 md:p-10">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        تواصل <span className="text-[#3F2571] underline">معنا</span>
                    </h2>
                    <p className="text-gray-600 mt-2">هل لديك استفسار؟ فريقنا هنا لخدمتك</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="bg-white rounded-xl p-6 border border-[#F197041A] hover:shadow-md hover:border-[#F19704] transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 font-medium">رقم الهاتف</span>
                            <div className="text-[#F19704] text-xl"><FiPhone /></div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">+201023359621</p>
                        <button className="text-[#F19704] border border-[#F19704] rounded-md px-4 py-1 text-sm hover:bg-[#F19704] hover:text-white transition">
                            اتصل بنا
                        </button>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-[#F197041A] hover:shadow-md hover:border-[#F19704] transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 font-medium">العنوان</span>
                            <div className="text-[#F19704] text-xl"><FiMapPin /></div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">المملكة العربية السعودية</p>
                        <button className="text-[#F19704] border border-[#F19704] rounded-md px-4 py-1 text-sm hover:bg-[#F19704] hover:text-white transition">
                            الموقع
                        </button>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-[#F197041A] hover:shadow-md hover:border-[#F19704] transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 font-medium">البريد الإلكتروني</span>
                            <div className="text-[#F19704] text-xl"><FiMail /></div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">hello@Maarefa.com</p>
                        <button className="text-[#F19704] border border-[#F19704] rounded-md px-4 py-1 text-sm hover:bg-[#F19704] hover:text-white transition">
                            راسلنا عبر البريد الإلكتروني
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 space-y-6 border border-[#F197041A]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأول</label>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full border rounded-md px-4 py-2 text-sm placeholder-gray-400"
                                placeholder="أدخل الاسم الأول الخاص بك هنا"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">اسم العائلة</label>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full border rounded-md px-4 py-2 text-sm placeholder-gray-400"
                                placeholder="أدخل اسم العائلة الخاص بك هنا"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border rounded-md px-4 py-2 text-sm placeholder-gray-400"
                                placeholder="أدخل بريدك الإلكتروني"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full border rounded-md px-4 py-2 text-sm placeholder-gray-400"
                                placeholder="أدخل رقم هاتفك"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                        <textarea
                            name="massage"
                            value={form.massage}
                            onChange={handleChange}
                            className="w-full border rounded-md px-4 py-2 text-sm placeholder-gray-400 h-32 resize-none"
                            placeholder="أدخل رسالتك هنا.."
                            required
                        />
                    </div>

                    <div className="text-end">
                        <button
                            type="submit"
                            disabled={isPending}
                            className="bg-[#F19704] text-white px-6 py-2 rounded-md hover:bg-[#d68303] transition text-sm disabled:opacity-50"
                        >
                            {isPending ? "جاري الإرسال..." : "إرسال الرسالة"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;