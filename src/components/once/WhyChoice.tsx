import {
  HiUserGroup,
  HiOutlineAdjustments,
  HiOutlineIdentification,
} from "react-icons/hi";
import {
  MdOutlineLiveTv,
  MdOutlineSmartToy,
  MdOutlineSupportAgent,
  MdOutlineChat,
  MdOutlineAttachMoney,
  MdOutlineUploadFile,
} from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import Header from "../common/Header";
import StudientFeature from "../common/StudientFeature";

const WhyChoice = () => {
  return (
    <section className="py-4 px-4 md:px-8 bg-white mt-26">
      <div className="">
        <Header
          title="لماذا تختار"
          subtitle="معرفة؟"
          className="text-3xl md:text-4xl font-bold mb-4"
          subtitleClassName="text-[#3F2571] underline"
        />
        <p className="text-gray-600 mb-12 text-lg">
          
          معرفة تجمع بين المرونة التفاعلية والمشاركة ذاتها وزيادة دخلك سواء كنت
          طالبًا تبحث عن تعليم بشغف ووقت أو معلمًا يسعى لمشاركة خبراته وزيادة
          دخله. "معرفة" هي المنصة التي تمنحك تجربة تعليمية مختلفة، آمنة ومحفزة.
        </p>

        <div className="flex flex-col gap-12">
          <div className="p-4 flex flex-col md:flex-row rounded-xl overflow-hidden">
            <div className="md:w-1/2">
              <img
                src="/assets/whyUs.webp"
                alt="student"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <span className="text-lg text-[#F19704] border border-[#F19704] bg-[#FEEED4] px-3 py-1 rounded-md mb-4 inline-block">
                للطلاب
              </span>
              <h3 className="text-gray-800 text-xl font-semibold mb-2">
                تعلّم بأسلوبك… وصمّم مستقبلك بطريقتك
              </h3>
              <p className="text-gray-600 mb-6">
                اختر من بين نخبة من أفضل المعلمين في مختلف التخصصات وتعلم في أي
                وقت ومن أي مكان عبر أدوات تعليمية ذكية وسهلة الاستخدام. نحن
                نوفّر لك تجربة تعليمية شخصية تلبي احتياجاتك وتواكب طموحاتك.
              </p>

              <div className="grid grid-cols-1 wrap-anywhere xl:grid-cols-2 gap-4">
                <StudientFeature
                  icon={<HiUserGroup className="text-white text-xl" />}
                  title="أفضل المعلمين بخبرة وموثوقية عالية"
                  text="تعلّم مع معلمين معتمدين يمتلكون خبرة واسعة في مجالاتهم."
                />

                <StudientFeature
                  icon={<MdOutlineLiveTv className="text-white text-xl" />}
                  title="دروس مباشرة تناسب مستواك وأهدافك"
                  text="جلسات تفاعلية مرنة ومصممة خصيصًا لاحتياجاتك التعليمية."
                />

                <StudientFeature
                  icon={<MdOutlineSmartToy className="text-white text-xl" />}
                  title="أدوات ذكية لتجربة تعليم سلسة"
                  text="منصّة متكاملة تسهل عليك التعلم والتواصل مع معلميك بكل بساطة."
                />

                <StudientFeature
                  icon={<HiOutlineAdjustments className="text-white text-xl" />}
                  title="خطط وباقات متنوعة تناسب ميزانيتك"
                  text="اختر الباقة التي تناسبك سواء للتعلم الفردي أو الجماعي."
                />
              </div>
              <StudientFeature
                className="w-full mt-4"
                icon={<MdOutlineSupportAgent className="text-white text-xl" />}
                title="دعم فني متواصل على مدار الساعة"
                text="فريق دعم جاهز دائمًا لمساعدتك وضمان تجربة تعليمية خالية من العقبات."
              />
            </div>
          </div>

          <div className="p-4 flex flex-col md:flex-row-reverse rounded-xl overflow-hidden">
            <div className="md:w-1/2">
              <img
                src="/assets/whyUs2.webp"
                alt="teacher"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <span className="text-lg text-[#3F2571] border border-[#3F2571] bg-[#D1C3EB] px-3 py-1 rounded-md mb-4 inline-block">
                للمعلمين
              </span>
              <h3 className="text-[#3F2571] text-xl font-semibold mb-2">
                علم بمرونتك… وحول مهاراتك إلى دخل
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                <span className="block">
                  أنشئ صفحتك التعريفية نظم جدولك قدم دروسك باحتراف وتواصل مباشرة
                  مع طلابك.
                </span>
                <span className="block">
                  منصة معرفة تمنحك الأدوات التعليمية والدعم المستمر لتطوير
                  مهاراتك وزيادة دخلك.
                </span>
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-full md:w-[48%]">
                  <div className="bg-[#3F2571] p-2 rounded-full me-3">
                    <FiSettings className="text-white text-xl" />
                  </div>
                  <span className="text-lg text-[#3F2571]">نظم جدولك</span>
                </div>
                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-full md:w-[48%]">
                  <div className="bg-[#3F2571] p-2 rounded-full me-3">
                    <HiOutlineIdentification className="text-white text-xl" />
                  </div>
                  <span className="text-lg text-[#3F2571]">
                    صفحتك التعريفية في دقيقة
                  </span>
                </div>
                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-full md:w-[48%]">
                  <div className="bg-[#3F2571] p-2 rounded-full me-3">
                    <MdOutlineChat className="text-white text-xl" />
                  </div>
                  <span className="text-lg text-[#3F2571]">
                    تواصل مباشر مع طلابك
                  </span>
                </div>
                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-full md:w-[48%]">
                  <div className="bg-[#3F2571] p-2 rounded-full me-3">
                    <MdOutlineAttachMoney className="text-white text-xl" />
                  </div>
                  <span className="text-lg text-[#3F2571]">
                    حول مهاراتك إلى دخل
                  </span>
                </div>
                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-[98%]">
                  <div className="bg-[#3F2571] p-2 rounded-full me-3">
                    <MdOutlineUploadFile className="text-white text-xl" />
                  </div>
                  <span className="text-lg text-[#3F2571]">
                    شارك موادك التعليمية
                  </span>
                </div>

                <p className="text-3xl mt-6 font-bold text-[#3F2571] text-center w-full">
                  آلاف الطلاب بانتظارك…
                  <span className="text-[#DA8904] underline mx-2">
                    ابدأ الآن
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoice;
