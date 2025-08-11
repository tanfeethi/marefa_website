import Header from "../common/Header";

const values = [
  {
    title: "الرؤية",
    text: "أن تكون المنصة الأبرز في مجال التعليم الرقمي في العالم العربي من خلال تمكين الأفراد من التعلم الفعّال، وتطوير مهاراتهم في بيئة تعليمية متقنة، شاملة، مرنة وموثوقة، تراعي احتياجات المستقبل وتساهم في بناء جيل معرفي مبتكر.",
    image: "/assets/blog.png",
  },
  {
    title: "الرسالة",
    text: "نؤمن أن التعلم ليس مجرد نقل للمعلومة بل هو رحلة ذات تأثير تلهم وتلهم التعلم وتطلق الإمكانيات. رؤيتنا هي تقديم تجربة تعلم تجمع بين جودة المحتوى وتفاعلية الأساليب التعليمية.",
    image: "/assets/blog.png",
  },
  {
    title: "قيمنا",
    text: "الموثوقية في كل مضمون نقدمه، وحرص متواصل لضمان جودة المحتوى، الشفافية، التعلم مدى الحياة، من خلال أدوات ذات جودة، وأطر قياسية، وإشراك المجتمع، نمكنك من خلق تجربة تعلم فريدة تضعك دائماً في المقدمة.",
    image: "/assets/blog.png",
  },
];

const StaticSection = () => {
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
          subtitleClassName="text-[#3F2571] font-bold underline decoration-[#3F2571]"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="border border-[#D6D6D6] rounded-lg overflow-hidden flex flex-col justify-between bg-white shadow-sm"
            >
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaticSection;
