import { useEffect } from "react";

const Loader = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden z-[9999]">
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <div className="mx-auto">
                    <div className="mb-12">
                        <div
                            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-6 shadow-xl animate-pulse"
                            style={{ backgroundColor: "#23afe5" }}
                        >
                            <span className="text-4xl font-bold text-white">JEC</span>
                        </div>
                    </div>

                    <div className="mb-8 relative">
                        <div className="flex justify-center items-center">
                            <div className="relative">
                                <div
                                    className="w-16 h-16 border-4 border-opacity-20 rounded-full animate-spin"
                                    style={{ borderColor: "#23afe5" }}
                                >
                                    <div
                                        className="absolute top-0 left-0 w-4 h-4 rounded-full"
                                        style={{ backgroundColor: "#23afe5" }}
                                    ></div>
                                </div>

                                <div
                                    className="absolute top-2 left-2 w-12 h-12 border-4 border-opacity-40 border-t-transparent rounded-full animate-spin"
                                    style={{
                                        borderColor: "#1a8bb8",
                                        animationDirection: "reverse",
                                        animationDuration: "1.5s",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Loading...
                        </h2>
                        <p className="text-base text-gray-600 mx-auto leading-relaxed max-w-md">
                            Please wait while we prepare everything for you
                        </p>
                    </div>

                    <div className="mb-8 w-full max-w-xs mx-auto">
                        <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                            <div
                                className="h-2 rounded-full animate-pulse"
                                style={{
                                    backgroundColor: "#23afe5",
                                    width: "100%",
                                    background: `linear-gradient(90deg, #23afe5 0%, #1a8bb8 50%, #23afe5 100%)`,
                                    backgroundSize: "200% 100%",
                                    animation: "shimmer 2s ease-in-out infinite",
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Floating Dots Animation */}
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="w-3 h-3 rounded-full animate-bounce"
                            style={{
                                backgroundColor: "#23afe5",
                                animationDelay: "0s",
                            }}
                        ></div>
                        <div
                            className="w-3 h-3 rounded-full animate-bounce"
                            style={{
                                backgroundColor: "#23afe5",
                                animationDelay: "0.2s",
                            }}
                        ></div>
                        <div
                            className="w-3 h-3 rounded-full animate-bounce"
                            style={{
                                backgroundColor: "#23afe5",
                                animationDelay: "0.4s",
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 animate-pulse"
                    style={{ backgroundColor: "#23afe5" }}
                ></div>
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 animate-pulse"
                    style={{
                        backgroundColor: "#1a8bb8",
                        animationDelay: "1s",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Loader;