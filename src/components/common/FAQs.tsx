import { useState } from "react";
import Header from "./Header";
import { FaMinus, FaPlus } from "react-icons/fa";
import useFaqs from "../../hooks/useFaqs";

const FAQs = () => {
  const { data: faqsData, isLoading } = useFaqs();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Skeleton placeholder for FAQ
  const SkeletonFAQ = () => (
    <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm animate-pulse">
      <div className="w-full px-4 py-4 flex justify-between items-center">
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-6 w-6 bg-gray-200 rounded"></div>
      </div>
      <div className="px-4 pb-4 pt-4">
        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 md:px-8">
      <Header
        title="الأسئلة"
        subtitle="الشائعة"
        className="text-center text-3xl md:text-4xl mb-6"
        subtitleClassName="text-center text-3xl md:text-4xl text-[#3F2571] border-b-8 border-b-[#3F2571] mt-2"
      />

      <div className="space-y-4">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => <SkeletonFAQ key={i} />)
          : faqsData?.data.map((faq, index) => (
              <div
                key={index}
                className="border rounded-md overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-right px-4 py-4 flex justify-between items-center"
                >
                  <span className="text-xl font-medium text-[#030303]">
                    {faq.question}
                  </span>
                  <span className="text-white bg-[#F19704] rounded p-1.5">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {activeIndex === index && (
                  <>
                    <div className="px-4">
                      <div className="border-b border-[#C5C5C5] w-full"></div>
                    </div>
                    <div className="px-4 pb-4 pt-4 text-lg text-[#727272]">
                      {faq.answer}
                    </div>
                  </>
                )}
              </div>
            ))}
      </div>
    </section>
  );
};

export default FAQs;
