import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import logo from "/public/assets/logo.png";
import WrapperContainer from "../common/WrapperContainer";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../utils/i18n";
import { getLastPathSegment } from "../../hooks/helpers/getLastPathSegment";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation("navbar");

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
          ? "fixed top-0 bg-[var(--navBG)] shadow-md"
          : `absolute top-0 ${
              lastSegment === "home" || lastSegment === "about"
                ? `${isOpen ? "bg-[var(--navBG)]" : "bg-gray-800"}` // bg-transparent
                : "bg-[var(--navBG)]"
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                  : "inline-flex items-center text-[#E0E0E0] font-semibold"
              }
            >
              {t("nav.home")}
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                  : "inline-flex items-center text-[#E0E0E0] font-semibold"
              }
            >
              {t("nav.services")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                  : "inline-flex items-center text-[#E0E0E0] font-semibold"
              }
            >
              {t("nav.about")}
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                  : "inline-flex items-center text-[#E0E0E0] font-semibold"
              }
            >
              {t("nav.projects")}
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                  : "inline-flex items-center text-[#E0E0E0] font-semibold"
              }
            >
              {t("nav.profile")}
            </NavLink>
          </div>

          {/* Right: Language, Theme Toggle, Auth Buttons */}
          <div className="hidden lg:flex gap-4 items-center">
            <button
              onClick={toggleLanguage}
              className="bg-white p-5 rounded-full h-[45px] w-[45px] flex items-center justify-center font-bold text-[var(--primary)] cursor-pointer"
            >
              {i18n.language === "en" ? "ع" : "EN"}
            </button>

            <NavLink
              to="/contact-us"
              className="btn bg-[var(--primary)] text-white border-none shadow-none"
            >
              {t("nav.contact")}
            </NavLink>
          </div>
        </div>
      </WrapperContainer>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full shadow-md transition-all duration-300 ease-in-out transform bg-[var(--navBG)] ${
          isOpen ? " opacity-100 scale-100 pb-5" : "max-h-0 opacity-0 scale-95"
        } overflow-hidden origin-top`}
      >
        <div className="flex flex-col gap-2 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                : "inline-flex items-center text-[#E0E0E0] font-semibold "
            }
          >
            {t("nav.home")}
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                : "inline-flex items-center text-[#E0E0E0] font-semibold "
            }
          >
            {t("nav.services")}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                : "inline-flex items-center text-[#E0E0E0] font-semibold "
            }
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                : "inline-flex items-center text-[#E0E0E0] font-semibold "
            }
          >
            {t("nav.projects")}
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                : "inline-flex items-center text-[#E0E0E0] font-semibold "
            }
          >
            {t("nav.profile")}
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost bg-[var(--navSelected)] text-[var(--navText)] font-bold"
                : "inline-flex items-center text-[#E0E0E0] font-semibold "
            }
          >
            {t("nav.contact")}
          </NavLink>
        </div>

        <div className="grid gap-4 lg:hidden">
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
