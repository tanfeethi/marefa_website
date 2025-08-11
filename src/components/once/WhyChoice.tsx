import {
    HiUserGroup,
    HiOutlineAdjustments,
    HiOutlineIdentification
} from 'react-icons/hi';
import {
    MdOutlineLiveTv,
    MdOutlineSmartToy,
    MdOutlineSupportAgent,
    MdOutlineChat,
    MdOutlineAttachMoney,
    MdOutlineUploadFile
} from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import Header from '../common/Header';

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
                <p className="text-gray-600 mb-12">
                    معرفة تجمع بين المرونة التفاعلية والمشاركة ذاتها وزيادة دخلك سواء كنت طالبًا تبحث عن تعليم بشغف ووقت أو معلمًا يسعى لمشاركة خبراته وزيادة دخله. "معرفة" هي المنصة التي تمنحك تجربة تعليمية مختلفة، آمنة ومحفزة.
                </p>

                <div className="flex flex-col gap-12">
                    <div className="p-4 flex flex-col md:flex-row rounded-xl overflow-hidden">
                        <div className="md:w-1/2">
                            <img
                                src="/assets/personImage.png"
                                alt="student"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <span className="text-sm text-[#F19704] border border-[#F19704] bg-[#FEEED4] px-3 py-1 rounded-md mb-4 inline-block">للطلاب</span>
                            <h3 className="text-gray-800 text-xl font-semibold mb-2">تعلّم بأسلوبك، وفي أي وقت</h3>
                            <p className="text-gray-600 mb-6">
                                اختر من بين نخبة من المعلمين في مختلف التخصصات، واجرِ دروسك التعليمية بكل سهولة. تعلّم من أي مكان، على أي جهاز.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center bg-white border border-[#F19704] rounded-md px-4 py-3 w-full md:w-[48%]">
                                    <div className="bg-[#F19704] p-2 rounded-full me-3">
                                        <HiUserGroup className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">معلمون موثوقون وذوو خبرة</span>
                                </div>
                                <div className="flex items-center bg-white border border-[#F19704] rounded-md px-4 py-3 w-full md:w-[48%]">
                                    <div className="bg-[#F19704] p-2 rounded-full me-3">
                                        <MdOutlineLiveTv className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">دروس مباشرة مخصصة لاحتياجاتك</span>
                                </div>
                                <div className="flex items-center bg-white border border-[#F19704] rounded-md px-4 py-3 w-full md:w-[48%]">
                                    <div className="bg-[#F19704] p-2 rounded-full me-3">
                                        <MdOutlineSmartToy className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">أدوات ذكية لتسهيل التعلم والتواصل</span>
                                </div>
                                <div className="flex items-center bg-white border border-[#F19704] rounded-md px-4 py-3 w-full md:w-[48%]">
                                    <div className="bg-[#F19704] p-2 rounded-full me-3">
                                        <HiOutlineAdjustments className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">باقات مختلفة تناسب ميزانيتك</span>
                                </div>
                                <div className="flex items-center bg-white border border-[#F19704] rounded-md px-4 py-3 w-[98%]">
                                    <div className="bg-[#F19704] p-2 rounded-full me-3">
                                        <MdOutlineSupportAgent className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">دعم فني دائم</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 flex flex-col md:flex-row-reverse rounded-xl overflow-hidden">
                        <div className="md:w-1/2">
                            <img
                                src="/assets/personImage2.png"
                                alt="teacher"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <span className="text-sm text-[#3F2571] border border-[#3F2571] bg-[#D1C3EB] px-3 py-1 rounded-md mb-4 inline-block">للمعلمين</span>
                            <h3 className="text-[#3F2571] text-xl font-semibold mb-2">علّم بمرونتك، وحقق دخلك</h3>
                            <p className="text-gray-600 mb-6">
                                أنشئ صفحتك التعريفية، حدد جدولك، وقدّم دروسك بكل احتراف. منصة معرفة تمنحك أدوات تعليمية متقدمة ودعم دائم لتطوير مهاراتك وزيادة دخلك.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-full md:w-[48%]">
                                    <div className="bg-[#3F2571] p-2 rounded-full me-3">
                                        <FiSettings className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">حدد جدولك الزمني</span>
                                </div>
                                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-full md:w-[48%]">
                                    <div className="bg-[#3F2571] p-2 rounded-full me-3">
                                        <HiOutlineIdentification className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">أنشئ صفحات تعريفية بسهولة</span>
                                </div>
                                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-full md:w-[48%]">
                                    <div className="bg-[#3F2571] p-2 rounded-full me-3">
                                        <MdOutlineChat className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">تواصل مباشرة مع طلابك</span>
                                </div>
                                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-full md:w-[48%]">
                                    <div className="bg-[#3F2571] p-2 rounded-full me-3">
                                        <MdOutlineAttachMoney className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">اربح من مهاراتك ومعرفتك</span>
                                </div>
                                <div className="flex items-center bg-white border border-[#3F2571] rounded-md px-4 py-3 w-[98%]">
                                    <div className="bg-[#3F2571] p-2 rounded-full me-3">
                                        <MdOutlineUploadFile className="text-white text-xl" />
                                    </div>
                                    <span className="text-sm text-[#3F2571]">قم برفع موادك التعليمية</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoice;