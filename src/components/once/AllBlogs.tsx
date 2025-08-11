import Header from "../common/Header";
import WrapperContainer from "../common/WrapperContainer";

const blogData = [
  {
    id: 1,
    image: "/assets/blog.png",
    title: "شراكة توعوية بين وزارة الصحة وجامعة المعرفة لتعز...",
    link: "#",
  },
  {
    id: 2,
    image: "/assets/blog.png",
    title: "جامعة المعرفة تُصنّف ضمن أفضل الجامعات عالمياً",
    link: "#",
  },
  {
    id: 3,
    image: "/assets/blog.png",
    title: "الجامعة توقع اتفاقية استراتيجية",
    link: "#",
  },
  {
    id: 4,
    image: "/assets/blog.png",
    title: "شراكة توعوية بين وزارة الصحة وجامعة المعرفة لتعز...",
    link: "#",
  },
  {
    id: 5,
    image: "/assets/blog.png",
    title: "جامعة المعرفة تُصنّف ضمن أفضل الجامعات عالمياً",
    link: "#",
  },
  {
    id: 6,
    image: "/assets/blog.png",
    title: "الجامعة توقع اتفاقية استراتيجية",
    link: "#",
  },
];

const AllBlogs = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white relative overflow-hidden mt-25">
      <WrapperContainer>
        <div className="absolute top-0 start-0 z-0 w-40 opacity-15">
          <img
            src="/assets/vector.png"
            alt="Background Decoration"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="relative z-10">
          <Header
            title="اخر"
            subtitle="الأخبار"
            className="text-end text-3xl md:text-4xl font-bold mb-2"
            subtitleClassName="text-[#3F2571] underline"
          />

          <p className="text-end text-gray-500 mb-10">
            لتصلكم على أحدث المستجدات، الإنجازات، والشراكات التي تساهم في بناء
            بنية تعليمية متجددة ومتكاملة. تابع أخبارنا لتكون دائماً على إطلاع
            بما يحدث في "معرفة" من تطورات توعوية، فعاليات، وإعلانات مهمة.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="border border-[#F58220] rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                <div className="w-8 h-1 bg-[#F58220] mx-auto my-2 rounded"></div>

                <div className="p-4 text-center">
                  <h3 className="text-sm text-gray-800 mb-2">{blog.title}</h3>
                  <a
                    href={blog.link}
                    className="text-[#F58220] text-sm font-medium underline"
                  >
                    المزيد من التفاصيل
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default AllBlogs;
