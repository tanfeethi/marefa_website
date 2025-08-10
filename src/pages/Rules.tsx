import Header from "../components/common/Header";

const Rules = () => {
    return (
        <section className="min-h-screen py-16 px-4 md:px-12 bg-white">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-2/3 text-left">
                    <Header
                        title="Terms"
                        subtitle="and Conditions"
                        className="text-left text-3xl md:text-4xl font-bold mb-4"
                        subtitleClassName="text-[#3F2571] underline"
                    />

                    <p className="text-gray-600 mb-8">
                        Welcome to the Maarefa platform. By using our services, you agree to the following terms and conditions.
                    </p>

                    <div className="mb-10">
                        <h3 className="text-lg font-semibold text-[#3F2571] mb-3">1. Teacher Terms</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                            <li>If final results are not submitted on time, customer support will be contacted to take appropriate action.</li>
                            <li>If absent without a clear reason, the teacher must provide justification. A formal warning may be issued.</li>
                            <li>Teachers must coordinate with students about class structure and solve any issues through the platform.</li>
                            <li>Repeated unjustified absences will result in follow-up by customer support and may require a detailed report.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-[#3F2571] mb-3">2. Student Terms and Conditions</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                            <li>Students can request refunds if dissatisfied by contacting customer support.</li>
                            <li>Prior notice is required in case of absence to allow proper lesson rescheduling.</li>
                            <li>Repeated absences without valid excuses will be escalated by the support team.</li>
                            <li>More than 3 unexcused absences will result in a formal warning.</li>
                            <li>If there are medical excuses, students must submit reports to technical support for review.</li>
                        </ul>
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center md:justify-end">
                    <img
                        src="/assets/vector.png"
                        alt="Rules Illustration"
                        className="w-full max-w-xs object-contain opacity-15"
                    />
                </div>
            </div>
        </section>
    );
};

export default Rules;