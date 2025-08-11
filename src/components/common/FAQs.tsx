import { useState } from "react";
import Header from "./Header";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "How do I start using the Maarefa platform?",
    answer:
      "You can register as a student from the website or app, then start browsing or enrolling in courses or creating learning pages.",
  },
  {
    question: "Are the courses individual or group-based?",
    answer:
      "Courses can be both individual and group-based, depending on the course format.",
  },
  {
    question: "Can I rewatch the lessons?",
    answer:
      "Yes, you can replay the lessons at any time during the course access period.",
  },
  {
    question: "How do you ensure the quality of the instructors?",
    answer:
      "Instructors go through a vetting and training process to ensure quality and teaching effectiveness.",
  },
  {
    question: "Can I use Maarefa from my mobile phone?",
    answer: "Yes, the platform is fully accessible from mobile devices.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <Header
        title="Frequently Asked"
        subtitle="Questions"
        className="text-center text-3xl md:text-4xl mb-6"
        subtitleClassName="text-center text-3xl md:text-4xl text-[#3F2571] border-b-8 border-b-[#3F2571] mt-2"
      />

      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-right px-4 py-4 flex justify-between items-center"
            >
              <span className="text-base font-medium text-[#030303]">
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
                <div className="px-4 pb-4 pt-4 text-sm text-[#727272]">
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
