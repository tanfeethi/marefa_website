import {
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import WrapperContainer from "../common/WrapperContainer";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1C1132" }} className="text-white py-6">
      <WrapperContainer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="الشعار" className="h-16 w-16" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              الرئيسية
            </Link>
            <Link
              to="/about"
              className="hover:text-purple-400 transition-colors"
            >
              من نحن
            </Link>
            <Link
              to="/blogs"
              className="hover:text-purple-400 transition-colors"
            >
              آخر الأخبار
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-purple-400 transition-colors"
            >
              تواصل معنا
            </Link>
            <Link
              to="why-us"
              className="hover:text-purple-400 transition-colors"
            >
              لماذا تختار معرفة؟
            </Link>
            <Link
              to="/privacy"
              className="hover:text-purple-400 transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <Link
              to="/rules"
              className="hover:text-purple-400 transition-colors"
            >
              الشروط والاحكام
            </Link>
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
                info@maarefa.app
              </span>
            </div>

            <div className="flex items-center gap-2 border border-[#8B68CE] bg-opacity-50 px-3 py-2 rounded transition-all hover:bg-purple-700 hover:text-white group cursor-pointer">
              <FaPhoneAlt className="h-4 w-4 text-[#8B68CE] group-hover:text-white transition-colors" />
              <span
                dir="ltr"
                className="text-white group-hover:text-white transition-colors"
              >
                +966569601112
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
