import { useEffect, useState } from "react";
import WrapperContainer from "../common/WrapperContainer";
import bgImage from "/assets/Container.webp";
import Loader from "../common/Loader";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  if (!isImageLoaded) {
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
        <div className=" w-full text-white">
          <div className="w-[60%] m-auto text-center mt-16">
            <h1 className="text-6xl font-bold leading-16">
              تعلم كما تريد، من أي مكان، ومع من تثق إبدأ رحلتك{" "}
              <span className="text-[#F19704]">التعليمية اليوم.</span>
            </h1>
            <p className="mt-7 text-[#E0E0E0]">
              تطبيق معرفة منصة تعليمية تجمع بين الطلاب و المدرسين والمتدربين و
              المدربين المؤهلين للتدريب والتدريس اونلاين لتقديم الحصص الجماعية
              والمحاضرات المباشرة توفر منصة معرفه كافة الادوات التي تمكنك من
              النجاح في تقديم تجربة تعليمية فريدة لطلابك من اي مكان و في اي
              زمان. انشىء صفحتك الشخصية على المنصة لتكون سيرتك الذاتية
              الالكترونية التي تعرفك الى طلابك من كل أنحاء العالم. معرفه لخدمة
              طلابنا المهتمين بالحصص الجماعية الاونلاين والدروس الخصوصية والتعلم
              عن بعد.
            </p>
          </div>

          <div className="mt-10 w-[60%] m-auto text-center gap-5 flex justify-center">
            <button className="bg-[#F19704] text-white px-8 font-semibold py-4 rounded-xl cursor-pointer">
              إبدأ التعلّم الآن
            </button>
            <button className="border-[#F19704] border-2 px-8 font-semibold py-4 rounded-xl text-[#F19704] cursor-pointer">
              أنضم كمعلم
            </button>
          </div>

          <div className="flex flex-col items-center gap-10 mt-20 md:flex-row">
            <div className="bg-gradient-to-bl from-[#050523] to-[#3D3B66] rounded-tl-[70px] rounded-lg p-5 text-white text-center flex-1">
              <h3 className="font-bold text-3xl mb-9">
                لماذا يختار المعلم معرفة؟
              </h3>
              <div className="mb-10 text-lg m-auto font-normal text-[#C5C5C5]">
                <ul className="pr-5 flex flex-col items-center w-full leading-relaxed">
                  <li>انشئ صفحتك التعريفية بسهولة</li>
                  <li>حدد جدولك الزمني</li>
                  <li>تواصل مباشرة مع طلابك</li>
                  <li>اربح من مهاراتك و معرفتك</li>
                  <li>قم برفع موادك التعليمية</li>
                </ul>
              </div>
            </div>

            <div className="border-4 border-white rounded-full">
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

            <div className="bg-gradient-to-br from-[#050523] to-[#3D3B66] rounded-tr-[70px] rounded-lg p-5 text-white text-center flex-1">
              <h3 className="font-bold text-3xl mb-9">
                لماذا يختار الطلاب معرفة؟
              </h3>
              <div className="mb-10 text-lg m-auto font-normal text-[#C5C5C5]">
                <ul className="pr-5 flex flex-col items-center w-full leading-relaxed">
                  <li>معلمون موثوقون و ذو خبرة</li>
                  <li>دروس مباشرة مخصصة لاحتياجاتك</li>
                  <li>أدوات تسهل التعلم و التواصل</li>
                  <li>باقات مختلفة تناسب ميزانيتك</li>
                  <li>دعم فني دائم</li>
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
