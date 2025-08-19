import { useNavigate, useParams } from "react-router";
import WrapperContainer from "../components/common/WrapperContainer";
import useBlogDetails from "../hooks/useBlogDetails";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useBlogDetails(Number(id));

  // Skeleton loader component
  const BlogDetailsSkeleton = () => (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white text-right overflow-hidden mt-25">
      <div className="absolute top-0 start-0 w-48 opacity-10 z-0 pointer-events-none">
        <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse" />
      </div>
      <div className="absolute bottom-0 end-0 w-32 opacity-5 z-0 pointer-events-none rotate-180">
        <div className="w-full h-32 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      <WrapperContainer>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Date Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 bg-gray-200 rounded-full px-6 py-3 animate-pulse w-48 h-10" />
          </div>

          {/* Title */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden mb-12">
            <div className="absolute top-0 start-0 w-full h-1 bg-gray-200 animate-pulse" />
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse mb-4" />
            <div className="flex items-center gap-4 mt-6">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-gray-200 animate-pulse" />
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12 space-y-6">
              <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse" />
            </div>

            {/* Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 px-8 pb-8">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
              </div>
              <div className="w-48 h-10 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );

  if (isLoading) return <BlogDetailsSkeleton />;

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white text-right overflow-hidden mt-25">
      {/* Enhanced Background Decorations */}
      <div className="absolute top-0 start-0 w-48 opacity-10 z-0 pointer-events-none">
        <img
          src="/assets/vector.png"
          alt="Background Decoration"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute bottom-0 end-0 w-32 opacity-5 z-0 pointer-events-none rotate-180">
        <img
          src="/assets/vector.png"
          alt="Background Decoration"
          className="w-full h-auto object-contain"
        />
      </div>

      <WrapperContainer>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section with Enhanced Design */}
          <div className="mb-12">
            {/* Publication Date Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F58220] to-[#ff9a47] text-white rounded-full px-6 py-3 shadow-lg shadow-orange-200">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-sm">
                  <p className="opacity-90 text-xs mb-0.5">تاريخ النشر</p>
                  <p className="font-semibold">
                    {data?.data.created_at
                      ? new Date(data.data.created_at).toLocaleDateString(
                          "ar-EG"
                        )
                      : "en-US"}
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Title Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-100 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 start-0 w-full h-1 bg-gradient-to-r from-[#F58220] to-[#ff9a47]"></div>
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-relaxed text-gray-800 mb-2">
                {data?.data.title}
              </h1>
              <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>5 دقائق قراءة</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 group">
              <img
                src={data?.data.image_url}
                alt="Blog main"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-right">
                <div className="space-y-8 text-gray-700 leading-loose">
                  <div className="relative">
                    <div className="absolute start-0 top-0 w-1 h-full bg-gradient-to-b from-[#F58220] to-[#ff9a47] rounded-full"></div>
                    <p className="text-lg md:text-xl font-medium text-gray-800 ps-6 mb-6">
                      {data?.data.title}
                    </p>
                    <p className="text-base md:text-lg ps-6 leading-relaxed">
                      {data?.data.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Section */}
              {/* <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      شارك المقال
                    </h3>
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => navigate("/blogs")}
                      className="bg-gradient-to-r from-[#F58220] to-[#ff9a47] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-200 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      اقرأ المزيد من المقالات
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default BlogDetails;
