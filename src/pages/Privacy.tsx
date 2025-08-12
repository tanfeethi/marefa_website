import { usePrivacy } from "../hooks/usePrivacy";
import Header from "../components/common/Header";

const Privacy = () => {
  const { data, isLoading, error } = usePrivacy();

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
                    {Array.from({ length: 3 }).map((_, i) => (
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
            حدث خطأ أثناء تحميل سياسة الخصوصية.
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
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Content Section */}
            <div className="lg:w-2/3">
              {/* Header Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-100 mb-8">
                <Header
                  title={title}
                  subtitle={subtitle}
                  className="text-right text-4xl md:text-5xl font-bold mb-4 text-[#F19704] bg-clip-text"
                  subtitleClassName="text-[#3F2571] underline decoration-2 underline-offset-4"
                />
              </div>

              {/* Content Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-100">
                <div
                  className="text-gray-700 leading-relaxed space-y-6 text-lg privacy-content"
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
                      alt="رسم توضيحي للخصوصية"
                      className="w-full max-w-sm mx-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F19704] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-400 rounded-full animate-bounce delay-1000"></div>
                </div>

                {/* Privacy Features */}
                <div className="mt-8 space-y-4">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      حماية البيانات المضمونة
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      تشفير متقدم
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      شفافية كاملة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .privacy-content h1,
        .privacy-content h2,
        .privacy-content h3 {
          @apply font-bold text-[#F19704] mt-8 mb-4;
        }

        .privacy-content h1 {
          @apply text-2xl;
        }
        .privacy-content h2 {
          @apply text-xl;
        }
        .privacy-content h3 {
          @apply text-lg;
        }

        .privacy-content p {
          @apply mb-4 leading-relaxed;
        }

        .privacy-content ul,
        .privacy-content ol {
          @apply mr-6 mb-4 space-y-2;
        }

        .privacy-content li {
          @apply leading-relaxed;
        }

        .privacy-content a {
          @apply text-[#F19704] underline hover:text-orange-600 transition-colors;
        }

        .privacy-content strong {
          @apply font-semibold text-gray-900;
        }
      `}</style>
    </div>
  );
};

export default Privacy;
