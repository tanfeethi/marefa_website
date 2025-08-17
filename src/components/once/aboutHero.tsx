import { useTranslation } from "react-i18next";
import { useAbout } from "../../hooks/useAboutUs";
import WrapperContainer from "../common/WrapperContainer";

const AboutHero = () => {
  const { data, isLoading, error } = useAbout();
  const { i18n } = useTranslation();

  const renderSkeleton = () => (
    <section className="mt-30 text-right">
      <WrapperContainer>
        <div className="w-full relative my-5">
          <div
            className="w-full xl:h-[400px] bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/assets/GroupFrame.png')",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="flex items-center h-full">
              <div className="p-11 grid grid-cols-1 gap-5 xl:flex-col-2 animate-pulse">
                <div>
                  <div className="w-32 h-10 bg-gray-200 rounded-xl mb-3"></div>
                  <div className="w-72 h-10 bg-gray-200 rounded mb-2"></div>
                  <div className="w-64 h-10 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );

  if (isLoading) return renderSkeleton();

  if (error) {
    return (
      <section className="mt-30 text-right">
        <WrapperContainer>
          <div className="text-center py-20 text-red-500">
            حدث خطأ أثناء تحميل المحتوى.
          </div>
        </WrapperContainer>
      </section>
    );
  }

  const titleParts = data?.name.split(" ") || [];
  const title = titleParts.slice(0, -1).join(" ");
  const subtitle = titleParts.slice(-1).join(" ");

  return (
    <section className="mt-30 text-right">
      <WrapperContainer>
        <div className="w-full relative my-5">
          <div
            className="w-full xl:h-[400px] bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/assets/GroupFrame.png')",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="flex flex-col justify-center h-full">
              <button className="border-2 px-5 py-3 rounded-xl mb-3 mr-11 w-fit">
                <span>{i18n.language === "en" ? "About Us" : "من نحن"}</span>
              </button>
              <div className="p-11 grid grid-cols-1 gap-5 xl:grid-cols-2 items-center">
                <div>
                  <p className="text-5xl font-bold mb-3">
                    {title} <br /> {subtitle}
                  </p>
                </div>
                <div
                  className="text-base font-normal leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: data?.content || "" }}
                />
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default AboutHero;
