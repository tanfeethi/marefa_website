import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import logo from "/public/assets/logo.png";
import WrapperContainer from "../common/WrapperContainer";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../utils/i18n";
import { getLastPathSegment } from "../../hooks/helpers/getLastPathSegment";
import { FaRegEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation("nav");

  const location = useLocation();
  const lastSegment = getLastPathSegment(location.pathname);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 w-full transition-all duration-300 ${
        scrolled
          ? "fixed top-0 bg-[#F19704] shadow-md"
          : `absolute top-0 ${
              lastSegment === "home"
                ? `${isOpen ? "bg-gray-800" : "bg-transparent"}` //bg-transparent
                : "bg-[#F19704]"
            }`
      }`}
    >
      <WrapperContainer>
        <div className="navbar p-3 flex items-center justify-between">
          {/* Left: Logo & Burger */}
          <div className="flex items-center gap-2">
            {/* Mobile Burger Icon */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <img
              src={logo}
              alt="logo"
              className="h-[30px] md:h-[55px] xl:w-[75px]"
            />
          </div>

          {/* Center: Nav Links */}
          <div className="hidden lg:flex gap-8 font-bold">
            {["home", "about", "why-us", "blogs"].map((item) => (
              <NavLink
                key={item}
                to={item === "home" ? "/" : `/${item}`}
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost px-5 py-2 rounded-sm text-white font-bold underline"
                    : "inline-flex items-center text-white/60 font-semibold"
                }
              >
                {t(`nav.${item}`)}
              </NavLink>
            ))}
          </div>

          {/* Right: Language & Contact */}
          <div className="hidden lg:flex gap-4 items-center">
            <button
              onClick={toggleLanguage}
              className="bg-[#FFFFFF]/30 p-5 rounded-full h-[45px] w-[45px] flex items-center justify-center font-bold text-white cursor-pointer"
            >
              {i18n.language === "en" ? "ع" : "EN"}
            </button>

            <NavLink
              to="/contact-us"
              className="btn text-white px-5 py-2 border-2 rounded-sm border-white shadow-none flex items-center gap-2"
            >
              <FaRegEnvelope />

              {t("nav.contact")}
            </NavLink>
          </div>
        </div>
      </WrapperContainer>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full shadow-md transition-all duration-300 ease-in-out transform bg-[var(--navBG)] ${
          isOpen ? "opacity-100 scale-100 pb-5" : "max-h-0 opacity-0 scale-95"
        } overflow-hidden origin-top`}
      >
        <div className="flex flex-col gap-2 p-4">
          {["home", "about", "projects", "profile", "contact"].map((item) => (
            <NavLink
              key={item}
              to={
                item === "home"
                  ? "/"
                  : item === "contact"
                  ? "/contact-us"
                  : `/${item}`
              }
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost px-5 py-2 rounded-sm text-white font-bold underline"
                  : "inline-flex items-center text-white/40 font-semibold"
              }
            >
              {t(`nav.${item}`)}
            </NavLink>
          ))}
        </div>

        {/* Mobile Language Toggle */}
        <div className="grid gap-4 lg:hidden px-4 mt-3">
          <div className="flex gap-5">
            <button
              onClick={toggleLanguage}
              className="bg-white p-5 rounded-full h-[45px] w-[45px] flex items-center justify-center font-bold text-[var(--primary)] cursor-pointer"
            >
              {i18n.language === "en" ? "ع" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
