import { useState } from "react";
import Header from "../common/Header";
import WrapperContainer from "../common/WrapperContainer";

const services = [
  {
    title: "توافق كامل مع مستواك الأكاديمي وخلفيتك الدراسية.",
    image: "/assets/whyUs.webp",
  },
  {
    title: "دعم مستمر يساعدك على النجاح في دراستك والتأهل لمراحل متقدمة.",
    image: "/assets/personImage.jfif",
  },
  {
    title: "مرونة في الوصول إلى الدروس من أي مكان وفي أي وقت.",
    image: "/assets/whyUs2.webp",
  },
];

const WhyMaarefa = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-4 md:px-12 bg-white text-right mt-10">
      <WrapperContainer>
        <Header
          title="لماذا"
          subtitle="منصة معرفة؟"
          className="text-3xl md:text-4xl font-bold mb-4"
          subtitleClassName="text-[#3F2571] underline"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
          <div className="flex flex-col h-full justify-between">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex justify-between items-center border rounded-md p-4 text-sm md:text-base text-right transition-all duration-200 ${
                  index === activeIndex
                    ? "bg-[#F58220]/10 border-[#F58220] text-[#F58220] font-bold py-16"
                    : "border-gray-200 hover:border-[#F58220] hover:bg-[#F58220]/5"
                }`}
              >
                <span className="flex-1 text-2xl">{service.title}</span>
                {/* <img
                  src={service.image}
                  alt={service.title}
                  className="w-14 h-14 object-cover ms-4 rounded-md"
                /> */}
              </button>
            ))}
          </div>

          <div className="w-full aspect-video">
            <img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="rounded-lg w-full h-full object-cover transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default WhyMaarefa;
