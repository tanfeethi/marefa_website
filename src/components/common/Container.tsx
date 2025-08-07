import Header from "./Header";
import WrapperContainer from "./WrapperContainer";

const Container = () => {
    return (
        <div 
            className="py-16 px-4"
            style={{
                background: 'linear-gradient(135deg, #F19704 0%, #8B5702 100%)'
            }}
        >
            <WrapperContainer>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="relative w-64 h-[520px] bg-black rounded-[40px] p-2 shadow-2xl">
                                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                                    
                                    <div className="pt-8 px-6 h-full flex flex-col items-center justify-center bg-gray-50">
                                        <div className="mb-8">
                                            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 text-center">Maarefa</h3>
                                        </div>
                                        
                                        <div className="w-full space-y-3">
                                            <div className="h-12 bg-orange-100 rounded-lg flex items-center px-4">
                                                <div className="w-6 h-6 bg-orange-400 rounded-full mr-3"></div>
                                                <div className="h-2 bg-orange-300 rounded w-20"></div>
                                            </div>
                                            <div className="h-12 bg-orange-100 rounded-lg flex items-center px-4">
                                                <div className="w-6 h-6 bg-orange-400 rounded-full mr-3"></div>
                                                <div className="h-2 bg-orange-300 rounded w-24"></div>
                                            </div>
                                            <div className="h-12 bg-orange-100 rounded-lg flex items-center px-4">
                                                <div className="w-6 h-6 bg-orange-400 rounded-full mr-3"></div>
                                                <div className="h-2 bg-orange-300 rounded w-16"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute -z-10 top-8 -right-4 w-32 h-32 bg-yellow-400 bg-opacity-20 rounded-full blur-xl"></div>
                            <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 bg-orange-300 bg-opacity-20 rounded-full blur-xl"></div>
                        </div>
                    </div>

                    <div className="flex-1 text-white text-center lg:text-left">
                        <Header 
                            title="Download 'Maarefa' App and Start Your Learning Journey from Anywhere!"
                            subtitle="Join thousands of learners who have chosen Maarefa to expand their knowledge"
                            className="text-white mb-8"
                            subtitleClassName="text-lg font-normal mt-4"
                        />
                        
                        <div className="space-y-3 mb-8 text-left">
                            <div className="flex items-center justify-start gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-lg">Access hundreds of diverse educational courses</span>
                            </div>
                            <div className="flex items-center justify-start gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-lg">Interactive and engaging educational content</span>
                            </div>
                            <div className="flex items-center justify-start gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-lg">Track your learning progress and achievements</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs">Download on the</div>
                                    <div className="text-lg font-semibold">App Store</div>
                                </div>
                            </button>

                            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs">Get it on</div>
                                    <div className="text-lg font-semibold">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </WrapperContainer>
        </div>
    );
};

export default Container;