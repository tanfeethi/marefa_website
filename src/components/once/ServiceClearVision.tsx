import Header from "../common/Header";
import TeamMemberCard from "../common/TeamMemberCard";
import WrapperContainer from "../common/WrapperContainer";

const AboutClearVision = () => {
  return (
    <section>
      <WrapperContainer>
        {/* Header section */}
        <div className="w-full py-16">
          <Header
            title="رؤية واضحة من القادة، ورسالة تحمل قيم المنصة."
            subtitle="قيم المنصة"
            className="text-3xl md:text-4xl font-bold mb-4"
            subtitleClassName="text-[#3F2571] underline"
            description={`في "معرفة"، تبدأ الرحلة التعليمية من قناعة راسخة لدى فريق القيادة بأن التعليم هو أساس المستقبل. نشارككم التزامنا ببناء منصة تعليمية تفاعلية، موثوقة، وشاملة تدعم الطلاب والمعلمين، وتدفع بالمجتمع نحو التعلّم المستمر والتميّز`}
          />
        </div>

        {/* Background image section */}
        <div className="w-full relative my-5">
          <div
            className="w-full h-full bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/assets/GroupFrame.png')",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="p-11">
              <div className="w-[25%] m-auto">
                <TeamMemberCard
                  image="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?semt=ais_hybrid&w=740&q=80"
                  name="ثامر بن معمر"
                  role="الرئيس التنفيذي"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 w-[70%] m-auto">
              <div className="p-11">
                <div className=" m-auto">
                  <TeamMemberCard
                    image="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?semt=ais_hybrid&w=740&q=80"
                    name="عبدالله الماضي"
                    role="نائب االرئيس التنفيذي"
                  />
                </div>
              </div>

              <div className="p-11">
                <div className=" m-auto">
                  <TeamMemberCard
                    image="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?semt=ais_hybrid&w=740&q=80"
                    name="عبدالله الماضي"
                    role="مدير الاداره المالية"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 m-auto">
              <div className="p-11">
                <div className=" m-auto">
                  <TeamMemberCard
                    image="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?semt=ais_hybrid&w=740&q=80"
                    name="عبدالله الماضي"
                    role="مدير التسويق"
                  />
                </div>
              </div>

              <div className="p-11">
                <div className=" m-auto">
                  <TeamMemberCard
                    image="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?semt=ais_hybrid&w=740&q=80"
                    name="عبدالله الماضي"
                    role="مدير أنظمة المعلومات"
                  />
                </div>
              </div>

              <div className="p-11">
                <div className=" m-auto">
                  <TeamMemberCard
                    image="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?semt=ais_hybrid&w=740&q=80"
                    name="عبدالله الماضي"
                    role="مدير إدارة العمليات التقنية"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default AboutClearVision;
