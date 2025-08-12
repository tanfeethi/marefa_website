import { useTerms } from "../hooks/useTerms";
import Header from "../components/common/Header";

const Rules = () => {
    const { data, isLoading, error } = useTerms();

    if (isLoading) return <div className="text-center py-20">جارٍ التحميل...</div>;
    if (error) return <div className="text-center py-20 text-red-500">حدث خطأ أثناء تحميل الشروط والأحكام.</div>;

    const titleParts = data?.name?.ar?.split(" ") || [];
    const title = titleParts.slice(0, -1).join(" ");
    const subtitle = titleParts.slice(-1).join(" ");

    return (
        <section className="min-h-screen py-16 px-4 md:px-12 bg-white text-right">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-2/3 text-right">
                    <Header
                        title={title}
                        subtitle={subtitle}
                        className="text-right text-3xl md:text-4xl font-bold mb-4"
                        subtitleClassName="text-[#3F2571] underline"
                    />

                    <p className="text-gray-600 mb-8">
                        مرحبًا بكم في منصة معرفة. باستخدامكم لخدماتنا، فإنكم توافقون على الشروط والأحكام التالية.
                    </p>

                    <div
                        className="text-gray-700 leading-relaxed space-y-6"
                        dangerouslySetInnerHTML={{ __html: data?.content?.ar || "" }}
                    />
                </div>

                <div className="md:w-1/3 flex justify-center md:justify-end">
                    <img
                        src="/assets/vector.png"
                        alt="رسم توضيحي للشروط"
                        className="w-full max-w-xs object-contain opacity-15"
                    />
                </div>
            </div>
        </section>
    );
};

export default Rules;