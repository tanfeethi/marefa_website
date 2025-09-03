import { useMessage } from "../../hooks/useMessage";
import { useValue } from "../../hooks/useValue";
import { useVision } from "../../hooks/useVision";
import Header from "../common/Header";

const values = [
  {
    hook: useVision,
    title: "الرؤية",
    image: "/assets/vision.webp",
  },
  {
    hook: useMessage,
    title: "الرسالة",
    image: "/assets/message.webp",
  },
  {
    hook: useValue,
    title: "قيمنا",
    image: "/assets/values.webp",
  },
];

const StaticSection = () => {
  const vision = useVision();
  const message = useMessage();
  const value = useValue();

  const hooksMap = [vision, message, value];

  const isLoading = hooksMap.some((h) => h.isLoading);
  const isError = hooksMap.some((h) => h.isError);

  if (isLoading) {
    return (
      <section className="py-20 text-center text-xl font-medium text-gray-500">
        جارٍ تحميل البيانات...
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-20 text-center text-xl font-medium text-red-500">
        حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى لاحقًا.
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-12 relative bg-white text-right overflow-hidden">
      <div className="absolute top-9 right-5 w-48 opacity-15 z-0 pointer-events-none">
        <img
          src="/assets/vector.png"
          alt="Background Vector"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative z-10">
        <Header
          title="الرؤية"
          subtitle="و قيمنا والرسالة"
          className="text-center text-3xl md:text-4xl mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, index) => {
            const { data } = hooksMap[index];

            return (
              <div
                key={index}
                className="border border-[#D6D6D6] rounded-lg overflow-hidden flex flex-col justify-between bg-white shadow-sm"
              >
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <div
                    className="text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: data?.content || "" }}
                  />
                </div>

                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StaticSection;