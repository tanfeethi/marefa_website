import { FaArrowUp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import WrapperContainer from '../common/WrapperContainer';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1C1132' }} className="text-white py-6">
            <WrapperContainer>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="flex items-center gap-3">
                        <img
                            src="/assets/logo.png"
                            alt="Logo"
                            className="h-8 w-8"
                        />
                        <span className="text-lg font-semibold">منارفا</span>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="#" className="hover:text-purple-300 transition-colors">الرئيسية</a>
                        <a href="#" className="hover:text-purple-300 transition-colors">من نحن</a>
                        <a href="#" className="hover:text-purple-300 transition-colors">احداث قادمة ومؤتمرات</a>
                        <a href="#" className="hover:text-purple-300 transition-colors">آخر الأخبار</a>
                        <a href="#" className="hover:text-purple-300 transition-colors">تواصل معنا</a>
                        <a href="#" className="hover:text-purple-300 transition-colors">الشراكة والاستثمار</a>
                        <a href="#" className="hover:text-purple-300 transition-colors">سياسة الخصوصية</a>
                    </nav>

                    <button
                        className="bg-purple-600 hover:bg-purple-700 rounded-full p-2 transition-colors"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <FaArrowUp className="h-5 w-5 text-white" />
                    </button>
                </div>

                <div className="mt-6 pt-6 border-t border-purple-800">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">

                        <div className="flex items-center gap-2 border border-[#8B68CE] bg-opacity-50 px-3 py-2 rounded">
                            <FaEnvelope className="h-4 w-4 text-[#8B68CE]" />
                            <span>hello@Maanrfa.com</span>
                        </div>

                        <div className="flex items-center gap-2 border border-[#8B68CE] bg-opacity-50 px-3 py-2 rounded">
                            <FaPhoneAlt className="h-4 w-4 text-[#8B68CE]" />
                            <span>+201023559621</span>
                        </div>

                        <div className="flex items-center gap-2 border border-[#8B68CE] bg-opacity-50 px-3 py-2 rounded">
                            <FaMapMarkerAlt className="h-4 w-4 text-[#8B68CE]" />
                            <span>المملكة العربية السعودية</span>
                        </div>
                    </div>

                    <div className="text-center mt-4 text-xs text-[#FCFCFC]">
                        جميع الحقوق محفوظة لمنصة منارفا
                    </div>
                </div>
            </WrapperContainer>
        </footer>
    );
};

export default Footer;