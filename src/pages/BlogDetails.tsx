import WrapperContainer from "../components/common/WrapperContainer";

const BlogDetails = () => {
    return (
        <section className="relative py-12 bg-white text-right overflow-hidden">
            <div className="absolute top-0 start-0 w-40 opacity-15 z-0 pointer-events-none">
                <img
                    src="/assets/vector.png"
                    alt="Background Decoration"
                    className="w-full h-auto object-contain"
                />
            </div>

            <WrapperContainer>
                <div className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
                        <div className="border border-[#F58220] rounded-lg px-4 py-2 w-fit text-sm text-gray-700">
                            <p className="text-xs text-gray-500 mb-1">تاريخ النشر</p>
                            <p className="font-medium">25th October 2023</p>
                        </div>

                        <div className="md:col-span-2 border border-gray-200 rounded-lg p-4">
                            <h1 className="text-2xl md:text-3xl font-bold leading-loose">
                                شراكة توعوية بين وزارة الصحة <br /> و جامعة المعرفة
                            </h1>
                        </div>
                    </div>

                    <div className="mb-8">
                        <img
                            src="/assets/blog.png"
                            alt="Blog main"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
                        <p>
                            "معرفة" توقع اتفاقية استراتيجية لتدريب 50,000 مستفيد رقميًا
                            وضعت منصة "معرفة" اتفاقية تعاون أخرى تهدف إلى تدريب أكثر من 50,000 مستفيد عبر منصتها الرقمية، وذلك ضمن مبادرة وطنية تستهدف تمكين الشباب وتأهيلهم لسوق العمل. وتعدّ هذه الخطوة واحدة من أكبر المبادرات التدريبية الرقمية في المملكة، حيث يتجاوز إجمالي الاستثمارات أكثر من 200 مليون ريال سعودي.
                        </p>
                        <p>
                            "معرفة" توقع اتفاقية استراتيجية لتدريب 50,000 مستفيد رقميًا
                            وضعت منصة "معرفة" اتفاقية تعاون أخرى تهدف إلى تدريب أكثر من 50,000 مستفيد عبر منصتها الرقمية، وذلك ضمن مبادرة وطنية تستهدف تمكين الشباب وتأهيلهم لسوق العمل. وتعدّ هذه الخطوة واحدة من أكبر المبادرات التدريبية الرقمية في المملكة، حيث يتجاوز إجمالي الاستثمارات أكثر من 200 مليون ريال سعودي.
                        </p>
                        <p>
                            "معرفة" توقع اتفاقية استراتيجية لتدريب 50,000 مستفيد رقميًا
                            وضعت منصة "معرفة" اتفاقية تعاون أخرى تهدف إلى تدريب أكثر من 50,000 مستفيد عبر منصتها الرقمية، وذلك ضمن مبادرة وطنية تستهدف تمكين الشباب وتأهيلهم لسوق العمل. وتعدّ هذه الخطوة واحدة من أكبر المبادرات التدريبية الرقمية في المملكة، حيث يتجاوز إجمالي الاستثمارات أكثر من 200 مليون ريال سعودي.
                        </p>
                    </div>
                </div>
            </WrapperContainer>
        </section>
    );
};

export default BlogDetails;