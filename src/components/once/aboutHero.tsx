import { useAbout } from "../../hooks/useAboutUs";
import WrapperContainer from "../common/WrapperContainer";

const AboutHero = () => {
  const { data, isLoading, error } = useAbout();

  if (isLoading) return <div className="text-center py-20">جارٍ التحميل...</div>;
  if (error) return <div className="text-center py-20 text-red-500">حدث خطأ أثناء تحميل المحتوى.</div>;

  const titleParts = data?.name?.ar.split(" ") || [];
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
            <div className="flex items-center h-full">
              <div className="p-11 grid grid-cols-1 gap-5 xl:flex-col-2">
                <div>
                  <button className="border-2 px-5 py-3 rounded-xl mb-3">
                    {title} <span className="text-[#3F2571] underline">{subtitle}</span>
                  </button>
                  <p className="text-5xl font-bold mb-3">{title} {subtitle}</p>
                </div>
                <div
                  className=" text-base font-normal leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: data?.content?.ar || "" }}
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