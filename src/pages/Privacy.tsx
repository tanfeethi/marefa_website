import Header from "../components/common/Header";

const Privacy = () => {
    return (
        <section className="min-h-screen py-16 px-4 md:px-12 bg-white">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-2/3 text-left">
                    <Header
                        title="Privacy"
                        subtitle="Policy"
                        className="text-left text-3xl md:text-4xl font-bold mb-4"
                        subtitleClassName="text-[#3F2571] underline"
                    />

                    <p className="text-gray-600 mb-8">
                        Welcome to the Maarefa platform. By using our services, you agree to the following privacy practices.
                    </p>

                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-[#3F2571] mb-3">Browsing</h3>
                        <p className="text-gray-700 leading-relaxed">
                            This website is not designed to collect your personal data when you browse it. Any information you provide will be used only to ensure your privacy and security.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-[#3F2571] mb-3">IP Address</h3>
                        <p className="text-gray-700 leading-relaxed">
                            When visiting any website, the hosting server automatically logs your IP address, the date and time of your visit, the browser type, and the referring URL.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-[#3F2571] mb-3">Data Creation</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We are committed to keeping all personal data confidential. We will not disclose any personal data to third parties unless legally required or in good faith to protect rights or comply with legal obligations.
                        </p>
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center md:justify-end">
                    <img
                        src="/assets/vector.png"
                        alt="Privacy Illustration"
                        className="w-full max-w-xs object-contain opacity-15"
                    />
                </div>
            </div>
        </section>
    );
};

export default Privacy;