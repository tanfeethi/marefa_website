import WrapperContainer from "../common/WrapperContainer";

const AboutHero = () => {
  return (
    <section className="mt-30">
      <WrapperContainer>
        {/* Background image section */}
        <div className="w-full relative my-5">
          <div
            className="w-full h-[400px] bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/assets/GroupFrame.png')",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="flex items-center h-full">
              <div className="p-11 grid grid-cols-2 gap-5">
                <div>
                  <button className="border-2 px-5 py-3 rounded-xl mb-3">
                    من نحن
                  </button>
                  <p className="text-5xl font-bold mb-3">
                    مرحبًا بك في منصة معرفة طريقك
                  </p>
                  <p className="text-5xl font-bold">نحو تعلّم ذكي وفعّال</p>
                </div>
                <div className=" flex items-center text-2xl font-normal">
                  نحن منصة تعليمية متخصصة في ربط الطلاب بالمعلمين الأكفاء من
                  مختلف المجالات. نؤمن بأن التعليم الفعّال لا يقتصر على شخصية
                  المحتوى، بل يعتمد على التفاعل، المرونة، وتجربة تعلم.
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default AboutHero;
