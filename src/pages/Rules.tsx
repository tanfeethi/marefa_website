import { useTerms } from "../hooks/useTerms";
import Header from "../components/common/Header";

const Rules = () => {
  const { data, isLoading, error } = useTerms();

  if (isLoading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 mt-20">
        <section className="relative py-20 px-4 md:px-12">
          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Skeleton Content Section */}
              <div className="lg:w-2/3 space-y-8">
                {/* Header Skeleton */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-100">
                  <div className="h-8 w-1/2 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse"></div>

                  {/* Welcome Message Skeleton */}
                  <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 mt-6 border-r-4 border-[#F19704]">
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Content Skeleton */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-100 space-y-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 w-full bg-gray-200 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Image Skeleton */}
              <div className="lg:w-1/3">
                <div className="sticky top-8">
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-100 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>

                  {/* Features Skeleton */}
                  <div className="mt-8 space-y-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center gap-3"
                      >
                        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-red-100">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-red-600 text-lg">
            حدث خطأ أثناء تحميل الشروط والأحكام.
          </div>
        </div>
      </div>
    );

  const titleParts = data?.name?.ar?.split(" ") || [];
  const title = titleParts.slice(0, -1).join(" ");
  const subtitle = titleParts.slice(-1).join(" ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 mt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <section className="relative py-20 px-4 md:px-12">
        <div className=" mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Content Section */}
            <div className="lg:w-2/3">
              {/* Header Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-100 mb-8">
                <Header
                  title={title}
                  subtitle={subtitle}
                  className="text-right text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F19704] to-orange-600 bg-clip-text text-transparent"
                  subtitleClassName="text-[#3F2571] underline decoration-2 underline-offset-4"
                />

                {/* Welcome Message */}
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 mt-6 border-r-4 border-[#F19704]">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    مرحبًا بكم في منصة معرفة. باستخدامكم لخدماتنا، فإنكم توافقون
                    على الشروط والأحكام التالية.
                  </p>
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-100">
                <div
                  className="text-gray-700 leading-relaxed space-y-6 text-lg terms-content"
                  dangerouslySetInnerHTML={{ __html: data?.content?.ar || "" }}
                />
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <div className="relative">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full transform scale-110 opacity-50"></div>

                  {/* Image Container */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-100">
                    <img
                      src="/assets/vector.png"
                      alt="رسم توضيحي للشروط"
                      className="w-full max-w-sm mx-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F19704] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-400 rounded-full animate-bounce delay-1000"></div>
                </div>

                {/* Terms Features */}
                <div className="mt-8 space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      شروط واضحة ومفهومة
                    </span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-orange-100 flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#F19704]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      حقوق متوازنة
                    </span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-green-100 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      حماية قانونية
                    </span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-yellow-100 flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      تحديث منتظم
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;