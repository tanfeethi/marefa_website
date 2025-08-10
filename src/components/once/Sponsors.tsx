import Marquee from "react-fast-marquee";

const Sponsors = () => {
    const clientLogos = [
        "/logos/zapier.png",
        "/logos/spotify.png",
        "/logos/zoom.png",
        "/logos/slack.png",
        "/logos/amazon.png",
        "/logos/adobe.png"
    ];

    return (
        <section className="py-4 border-t border-b border-[#FFF4E4] relative my-4">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-[#FFF4E4] text-[#4B4B4B] px-6 py-2 rounded-full text-sm font-medium shadow-sm border border-[#FEEED4]">
                    اكثر من 30 شريك نجاح
                </span>
            </div>

            <div className="relative w-full bg-white py-6" dir="ltr">
                <Marquee speed={50} gradient={false} pauseOnHover={true}>
                    {clientLogos.concat(clientLogos).map((logo, index) => (
                        <div key={index} className="mx-8 flex items-center justify-center">
                            <img
                                src={logo}
                                alt={`Client logo ${index + 1}`}
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Sponsors;