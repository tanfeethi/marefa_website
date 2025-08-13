import Header from "./Header";
import WrapperContainer from "./WrapperContainer";

const Container = () => {
  return (
    <div
      className="px-4"
      style={{
        background: "linear-gradient(135deg, #8D5802 0%, #F09604 100%)",
      }}
    >
      <WrapperContainer>
        <div className="flex flex-col content-between lg:flex-row-reverse items-center gap-12">
          <div className="justify-center lg:justify-end hidden xl:flex">
            <img src="/assets/getApp.webp" alt="" className="w-[50%] h-full" />
          </div>

          <div className="text-white text-center lg:text-right w-full">
            <Header
              title="قم بتحميل تطبيق 'معرفة' وابدأ رحلتك التعليمية من أي مكان!"
              subtitle=""
              className="text-white mb-8"
              subtitleClassName="text-lg font-normal mt-4"
            />

            <div className="space-y-3 mb-8 text-right ">
              <div>
                حمّل تطبيق "معرفة" وإبدأ رحلتك التعليمية من أي مكان! مع العديد
                من المميزات
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-2 h-2 bg-white"></div>
                <span className="text-lg">
                  الوصول إلى مئات الدورات التعليمية المتنوعة
                </span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-2 h-2 bg-white"></div>
                <span className="text-lg">محتوى تعليمي تفاعلي وجذاب</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-2 h-2 bg-white"></div>
                <span className="text-lg">متابعة تقدمك التعليمي وإنجازاتك</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="">
                  <div className="text-xs">تنزيل من</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </button>

              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="">
                  <div className="text-xs">احصل عليه من</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
                <img
                  src="/assets/Google_Play_logo.svg"
                  alt="Google Play"
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default Container;
