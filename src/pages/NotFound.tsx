import {
    HomeOutlined,
    SearchOutlined,
    ArrowLeftOutlined,
    ReloadOutlined,
} from "@ant-design/icons";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <div className="mx-auto">
                    <div className="mb-8">
                        <div
                            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-lg"
                            style={{ backgroundColor: "#23afe5" }}
                        >
                            <span className="text-3xl font-bold text-white">JEC</span>
                        </div>
                    </div>

                    <div className="mb-8 relative">
                        <h1
                            className="text-9xl md:text-[12rem] font-black leading-none select-none"
                            style={{
                                background: `linear-gradient(135deg, #23afe5, #1a8bb8)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            404
                        </h1>
                        <div
                            className="absolute inset-0 text-9xl md:text-[12rem] font-black leading-none opacity-20 blur-sm transform scale-105"
                            style={{ color: "#23afe5" }}
                        >
                            404
                        </div>
                    </div>

                    <div className="mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-lg text-gray-600 mx-auto leading-relaxed">
                            The page you're looking for seems to have wandered off into the
                            digital void. Don't worry, it happens to the best of us!
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <button
                            className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white shadow-lg min-w-[180px] justify-center"
                            style={{ backgroundColor: "#23afe5" }}
                        >
                            <HomeOutlined className="text-xl" />
                            Go Home
                        </button>

                        <button
                            className="flex items-center gap-3 px-8 py-4 bg-white border-2 rounded-xl font-semibold text-gray-700 shadow-lg min-w-[180px] justify-center"
                            style={{ borderColor: "#23afe5" }}
                        >
                            <ArrowLeftOutlined className="text-xl" />
                            Go Back
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg font-medium text-gray-700">
                            <ReloadOutlined className="text-base" />
                            Refresh Page
                        </button>

                        <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg font-medium text-gray-700">
                            <SearchOutlined className="text-base" />
                            Search Site
                        </button>
                    </div>

                    <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
                        <p className="text-sm text-gray-600 leading-relaxed">
                            If you believe this is an error, please contact our support team
                            or try searching for what you need. We're here to help you find
                            your way!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;