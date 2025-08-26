import Header from "../common/Header";
import TeamMemberCard from "../common/TeamMemberCard";
import WrapperContainer from "../common/WrapperContainer";

const AboutClearVision = () => {
  return (
    <>
      <section className="hidden xl:block">
        <WrapperContainer>
          {/* Header section */}
          <div className="w-full py-16">
            <Header
              title="رؤية واضحة من القادة، ورسالة تحمل قيم المنصة."
              className="text-3xl md:text-4xl font-bold mb-4"
              subtitleClassName="text-[#3F2571] underline"
              description={`في "معرفة"، تبدأ الرحلة التعليمية من قناعة راسخة لدى فريق القيادة بأن التعليم هو أساس المستقبل. نشارككم التزامنا ببناء منصة تعليمية تفاعلية، موثوقة، وشاملة تدعم الطلاب والمعلمين، وتدفع بالمجتمع نحو التعلّم المستمر والتميّز`}
            />
          </div>

          {/* Background image section */}
          <div className="w-full relative my-5 mb-32">
            <div
              className="w-full h-full bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/assets/GroupFrame.png')",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="p-10">
                <div className="w-[30%] m-auto">
                  <TeamMemberCard
                    image="assets/team/samer.jpg"
                    name="ثامر بن معمر"
                    role="الرئيس التنفيذي"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 w-[95%] m-auto">
                <div className="p-10">
                  <div className=" m-auto">
                    <TeamMemberCard
                      image="assets/team/Mohamed.jpg"
                      name="محمد الحصيان"
                      role="مدير التسويق"
                    />
                  </div>
                </div>

                <div className="p-10">
                  <div className=" m-auto">
                    <TeamMemberCard
                      image="assets/team/abdallah.jpg"
                      name="عبدالله الماضي"
                      role="مدير الأداره المالية"
                    />
                  </div>
                </div>

                <div className="p-10">
                  <div className=" m-auto">
                    <TeamMemberCard
                      image="assets/team/khalid.jpg"
                      name="خالد التويجري"
                      role="مدير إدارة العمليات التقنية"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </section>

      <section className="py-16 block xl:hidden">
        <WrapperContainer>
          <div className="w-full py-16">
            <Header
              title="رؤية واضحة من القادة، ورسالة تحمل قيم المنصة."
              subtitle="قيم المنصة"
              className="text-3xl md:text-4xl font-bold mb-4"
              subtitleClassName="text-[#3F2571] underline"
              description={`في "معرفة"، تبدأ الرحلة التعليمية من قناعة راسخة لدى فريق القيادة بأن التعليم هو أساس المستقبل. نشارككم التزامنا ببناء منصة تعليمية تفاعلية، موثوقة، وشاملة تدعم الطلاب والمعلمين، وتدفع بالمجتمع نحو التعلّم المستمر والتميّز`}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white">
              <img
                src="assets/team/samer.jpg"
                alt="ثامر بن معمر"
                className="w-30 h-30 rounded-full object-fill mb-4"
              />
              <h3 className="text-lg font-bold">ثامر بن معمر</h3>
              <p className="text-gray-600">الرئيس التنفيذي</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white">
              <img
                src="assets/team/Mohamed.jpg"
                alt="محمد الحصيان"
                className="w-30 h-30 rounded-full object-fill mb-4"
              />
              <h3 className="text-lg font-bold">محمد الحصيان</h3>
              <p className="text-gray-600">مدير التسويق</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white">
              <img
                src="assets/team/abdallah.jpg"
                alt="عبدالله الماضي"
                className="w-30 h-30 rounded-full object-fill mb-4"
              />
              <h3 className="text-lg font-bold">عبدالله الماضي</h3>
              <p className="text-gray-600">مدير الاداره المالية</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white">
              <img
                src="assets/team/khalid.jpg"
                alt="خالد التويجري"
                className="w-30 h-30 rounded-full object-fill mb-4"
              />
              <h3 className="text-lg font-bold">خالد التويجري</h3>
              <p className="text-gray-600">مدير إدارة العمليات التقنية</p>
            </div>
          </div>
        </WrapperContainer>
      </section>
    </>
  );
};

export default AboutClearVision;
