import { useState } from "react";
import Header from "../common/Header";
import WrapperContainer from "../common/WrapperContainer";

const services = [
  {
    title: "دروس مباشرة فردية أو جماعية",
    image: "/assets/blog.png",
  },
  {
    title: "أدوات تفاعلية داخل الحصة: مشاركة ملفات، ملاحظات مباشرة",
    image: "/assets/personImage.png",
  },
  {
    title: "دورات مرنة وسهولة في الدفع",
    image: "/assets/personImage2.png",
  },
  {
    title: "مجتمع نشط يدعم التعلم المستمر",
    image: "/assets/personImage3.jpg",
  },
];

const AllServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-4 md:px-12 bg-white text-right mt-10">
      <WrapperContainer>
        <Header
          title="ماذا"
          subtitle="نُقدم؟"
          className="text-3xl md:text-4xl font-bold mb-4"
          subtitleClassName="text-[#3F2571] underline"
          description={`    في "معرفة"، نقدم تجربة تعليمية متكاملة مصممة لتناسب احتياجات كل متعلم،
          من خلال دروس تفاعلية ذكية ودعم دائم، لتوجه إلى تمكين الطالب من التعلم
          بأسلوب مرن، ومتكامل سواء بشكل فردي أو ضمن مجموعة.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
          <div className="w-full aspect-video">
            <img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="rounded-lg w-full h-full object-cover transition duration-300 ease-in-out"
            />
          </div>

          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex justify-between items-center border rounded-md p-4 text-sm md:text-base text-right transition-all duration-200 ${
                  index === activeIndex
                    ? "bg-[#F58220]/10 border-[#F58220] text-[#F58220] font-bold"
                    : "border-gray-200 hover:border-[#F58220] hover:bg-[#F58220]/5"
                }`}
              >
                <span className="flex-1">{service.title}</span>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-14 h-14 object-cover ms-4 rounded-md"
                />
              </button>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default AllServices;
