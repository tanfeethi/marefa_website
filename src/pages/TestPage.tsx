import TeamCard from "../components/once/TeamCard";

const TestPage = () => {
  return (
    <>
      <div className="my-48">
        <div
          className=" w-full h-[600px] flex flex-col justify-around items-center bg-no-repeat bg-center p-5"
          style={{
            backgroundImage: "url('/assets/GroupFrame.png')",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex justify-around flex-wrap min-w-full mx-auto">
            <TeamCard
              image="/assets/team/samer.jpg"
              name="ثامر بن معمر"
              role="الرئيس التنفيذي"
            />
          </div>
          <div className="flex justify-around flex-wrap min-w-full mx-auto">
            <TeamCard
              image="/assets/team/Mohamed.jpg"
              name="محمد الحصيان"
              role="مدير التسويق"
            />
            <TeamCard
              image="/assets/team/abdallah.jpg"
              name="عبدالله الماضي"
              role="مدير الأداره المالية"
            />
            <TeamCard
              image="/assets/team/khalid.jpg"
              name="خالد التويجري"
              role="مدير إدارة العمليات"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
