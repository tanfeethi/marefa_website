import Header from "../common/Header";

const values = [
  {
    title: "الرؤية",
    text: "أن نكون المنصة الرائدة في مجال التعليم الرقمي في العالم العربي، من خلال تمكين الأفراد من التعلم الفعّال، وتطوير مهاراتهم في بيئة تعليمية محفّزة، شاملة، موثوقة، ومرنة، تواكب تطلعات المستقبل وتساهم في بناء جيل معرفي متميز.",
    image: "/assets/blog.png",
  },
  {
    title: "الرسالة",
    text: "نؤمن أن التعليم ليس مجرد نقل للمعلومات بل هو تجربة حية تبني الثقة وتطلق الفضول وتلهم التعلم تعمل على تمكين كل طالب من الوصول إلى المعرفة التي يستحقها من خلال بيئة رقمية آمنة وتفاعلية تجمع بين جودة المعلم وسهولة الوصول",
    image: "/assets/blog.png",
  },
  {
    title: "قيمنا",
    text: [
      "الموثوقية في كل مضمون نقدمه",
      "حرص متواصل لضمان جودة المحتوى",
      "الشفافية",
      "التعلم مدى الحياة",
      "أدوات ذات جودة وأطر قياسية",
      "إشراك المجتمع لخلق تجربة تعلم فريدة",
    ],
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

                {Array.isArray(item.text) ? (
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 pr-5 text-sm text-gray-700 leading-relaxed list-disc list-inside">
                    {item.text.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                )}
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
