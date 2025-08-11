import WrapperContainer from "../common/WrapperContainer";
import bgImage from "/assets/Container.webp";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "100% 100%",
      }}
      className="min-h-screen w-full pt-24"
    >
      <WrapperContainer>
        <div className=" w-full h-40 text-white">
          <div className="w-[60%] m-auto text-center mt-16">
            <h1 className="text-6xl font-bold">
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
            <button className="bg-[#F19704] text-white px-8 font-semibold py-4 rounded-xl">
              إبدأ التعلّم الآن
            </button>
            <button className="border-[#F19704] border-2 text-white px-8 font-semibold py-4 rounded-xl">
              أنضم كمعلم
            </button>
          </div>

          <div className="flex items-center gap-10 mt-20">
            <div className="bg-gradient-to-bl from-[#050523] to-[#3D3B66] rounded-tl-[70px] rounded-lg p-5 text-white text-center flex-1">
              <h3 className="font-bold text-3xl mb-9">لماذا تختار "معرفة"؟</h3>
              <p className="mb-10 text-lg w-[80%] m-auto font-normal text-[#C5C5C5]">
                اختر من بين نخبة من المعلمين في مختلف التخصصات، واحجز دروسك
                الفردية أو الجماعية بكل سهولة. تعلّم من أي مكان، على أي جهاز،
                واستفد من أدوات تفاعلية ودعم دائم لمساعدتك على التطور.
              </p>
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
              <h3 className="font-bold text-3xl mb-9">من نحن</h3>
              <p className="mb-10 text-lg w-[80%] m-auto font-normal text-[#C5C5C5]">
                نحن منصة تعليمية متخصصة في ربط الطلاب بالمعلمين الأكفاء من مختلف
                المجالات. نؤمن بأن التعليم الفعّال لا يقتصر على شخصية المحتوى،
                بل يعتمد على التفاعل، المرونة، وتجربة تعلم.
              </p>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Hero;
