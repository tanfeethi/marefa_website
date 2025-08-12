import {
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import WrapperContainer from "../common/WrapperContainer";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1C1132" }} className="text-white py-6">
      <WrapperContainer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="الشعار" className="h-16 w-16" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors">
              الرئيسية
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              من نحن
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              الفعاليات القادمة
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              آخر الأخبار
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              تواصل معنا
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              الشراكات والاستثمار
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              سياسة الخصوصية
            </a>
          </nav>

          <button
            className="bg-[#8B68CE] hover:bg-purple-700 rounded-full p-2 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-6 pt-6 border-t border-purple-800 gap-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 border border-[#8B68CE] bg-opacity-50 px-3 py-2 rounded transition-all hover:bg-purple-700 hover:text-white group cursor-pointer">
              <FaEnvelope className="h-4 w-4 text-[#8B68CE] group-hover:text-white transition-colors" />
              <span className="text-white group-hover:text-white transition-colors">
                Test@Maarefa.com
              </span>
            </div>

            <div className="flex items-center gap-2 border border-[#8B68CE] bg-opacity-50 px-3 py-2 rounded transition-all hover:bg-purple-700 hover:text-white group cursor-pointer">
              <FaPhoneAlt className="h-4 w-4 text-[#8B68CE] group-hover:text-white transition-colors" />
              <span className="text-white group-hover:text-white transition-colors">
                +20 102 355 9621
              </span>
            </div>

            <div className="flex items-center gap-2 border border-[#8B68CE] bg-opacity-50 px-3 py-2 rounded transition-all hover:bg-purple-700 hover:text-white group cursor-pointer">
              <FaMapMarkerAlt className="h-4 w-4 text-[#8B68CE] group-hover:text-white transition-colors" />
              <span className="text-white group-hover:text-white transition-colors">
                المملكة العربية السعودية
              </span>
            </div>
          </div>

          <div className="text-center mt-4 text-xs text-[#FCFCFC]">
            جميع الحقوق محفوظة © منصة معرفة
          </div>
        </div>
      </WrapperContainer>
    </footer>
  );
};

export default Footer;
