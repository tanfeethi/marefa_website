import { useNavigate } from "react-router";
import useBlogs from "../../hooks/useBlogs";
import Header from "../common/Header";
import WrapperContainer from "../common/WrapperContainer";

const AllBlogs = () => {
  const navigate = useNavigate();
  const { data: blogs, isLoading } = useBlogs(1);

  // Skeleton component for loading state
  const SkeletonCard = () => (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white animate-pulse">
      <div className="w-full h-48 bg-gray-200"></div>
      <div className="mx-auto py-2 w-24 h-6 bg-gray-200 rounded-2xl mt-3"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-3 w-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

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
            className="text-3xl md:text-4xl font-bold mb-2"
            subtitleClassName="text-[#3F2571] underline"
          />

          <p className="text-gray-500 mb-10 text-xl">
            لتصلكم على أحدث المستجدات، الإنجازات، والشراكات التي تساهم في بناء
            بنية تعليمية متجددة ومتكاملة. تابع أخبارنا لتكون دائماً على إطلاع
            بما يحدث في "معرفة" من تطورات توعوية، فعاليات، وإعلانات مهمة.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : blogs?.data.data.map((blog) => (
                  <div
                    key={blog.id}
                    className="border border-[#F58220] rounded-lg overflow-hidden shadow-sm bg-white"
                  >
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />

                    <div className="bg-[#F58220] mx-auto py-1 w-fit px-3 text-center rounded-2xl mt-6">
                      {blog.title}
                    </div>

                    <div className="p-4 text-center">
                      <h3 className="text-sm text-gray-800 mb-2 line-clamp-1">
                        {blog.description}
                      </h3>
                      <button
                        onClick={() => navigate(`/blog-details/${blog.id}`)}
                        className="text-[#F58220] text-sm font-medium underline cursor-pointer"
                      >
                        المزيد من التفاصيل
                      </button>
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
