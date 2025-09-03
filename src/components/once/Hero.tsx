import { useEffect, useState } from "react";
import WrapperContainer from "../common/WrapperContainer";
import bgImage from "/assets/Container.webp";
import Loader from "../common/Loader";
import { useIntro } from "../../hooks/useIntro";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { data: introData, isLoading: introLoading, isError } = useIntro();

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  if (!isImageLoaded || introLoading) {
    return <Loader />;
  }

  return (
    <section
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "100% 100%",
      }}
      className="min-h-screen w-full pt-24"
    >
      <WrapperContainer>
        <div className="w-full text-white">
          <div className="w-[80%] m-auto text-center mt-8 md:w-[60%]">
            <h1 className="text-3xl font-bold md:leading-20 md:text-6xl">
              التعليم لم يعد مقيدًا بالفصول… مع معرفة يمكنك أن تصنع تجربتك
              التعليمية الخاصة بك في أي وقت وأينما كنت و  تعلم كما تحب متى تشاء ومن أي مكان لتصنع مسارك 
              <span className="text-[#F19704]"> نحو مستقبل أفضل </span>
            </h1>

            {isError ? (
              <p className="mt-7 text-[#E0E0E0]">
                تعذر تحميل المقدمة حاليًا. الرجاء المحاولة لاحقًا.
              </p>
            ) : (
              <div
                className="mt-7 text-[#E0E0E0] text-lg md:leading-loose"
                dangerouslySetInnerHTML={{ __html: introData?.content || "" }}
              />
            )}
          </div>

          <div className="mt-10 w-full m-auto text-center gap-5 flex justify-center md:w-[60%]">
            <button className="bg-[#F19704] text-white px-8 font-semibold py-4 rounded-xl cursor-pointer">
              إبدأ التعلّم الآن
            </button>
            <button className="border-[#F19704] border-2 px-8 font-semibold py-4 rounded-xl text-[#F19704] cursor-pointer">
              أنضم كمعلم
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-10 mt-20">
            <div className="bg-gradient-to-bl from-[#050523] to-[#3D3B66] rounded-tl-[70px] rounded-lg p-5 text-white text-center flex-1 flex flex-col">
              <h3 className="font-bold text-3xl mb-9">ماذا نُقدّم؟</h3>
              <div className="mb-10 text-lg font-normal text-[#C5C5C5] flex-1 text-right">
                <ul className="list-disc pr-5 flex flex-col w-full leading-relaxed md:list-inside">
                  <li>جلسات تعليمية حية فردية وجماعية وفق احتياجاتك</li>
                  <li>
                    أدوات تفاعلية داخل الحصة: مشاركة ملفات، ملاحظات مباشرة
                  </li>
                  <li>مرونة عالية في المواعيد وخيارات دفع ميسرة</li>
                  <li>مجتمع نشط يدعم التعلّم المستمر</li>
                </ul>
              </div>
            </div>

            <div className="border-4 border-white rounded-full self-center">
              <div className="border-4 border-[#595170] rounded-full">
                <div className="bg-[#5547EB] rounded-full w-[80px] h-[80px] flex items-center justify-center shrink-0 p-2 shadow-[0_0_10px_#5547EB,0_0_20px_#877DF1]">
                  <img
                    className="w-full h-full object-contain rounded-full"
                    src="/assets/logo.png"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#050523] to-[#3D3B66] rounded-tr-[70px] rounded-lg p-5 text-white text-center flex-1 flex flex-col">
              <h3 className="font-bold text-3xl mb-9">
                لماذا يختار الطلاب معرفة؟
              </h3>
              <div className="mb-10 text-lg font-normal text-[#C5C5C5] flex-1 text-right">
                <ul className="list-disc pr-5 flex flex-col w-full leading-relaxed md:list-inside">
                  <li>معلمون نخبة بخبرة عالية</li>
                  <li>دروس تفاعلية مصممة خصيصًا لمسارك واحتياجاتك</li>
                  <li>أدوات تعليمية حديثة تسهّل التعلم وتجعله ممتعًا</li>
                  <li>باقات مرنة بأسعار تناسب ميزانيتك</li>
                  <li>دعم فني متواصل يرافقك في كل خطوة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Hero;
