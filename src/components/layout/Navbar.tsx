import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import myPhoto from "../../assets/logo.png"; // Your profile photo
import { menu, close } from "../../assets";
import { config } from "../../constants/config";
import githubLogo from "../../assets/github.png";
import linkedinLogo from "../../assets/inkedin copy.svg";

const Navbar = () => {
  const [active, /* setActive */] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false); // State for fullscreen logo

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Logo with Click Event */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={myPhoto}
              alt="Alok Pratap Jadon"
              className="h-9 w-9 object-cover rounded-full cursor-pointer"
              onClick={() => setShowFullscreen(true)}
            />
            <p className="flex cursor-pointer text-[18px] font-bold text-white">
              {config?.html?.title}
            </p>
          </Link>

          {/* Navigation Links and Icons Container */}
          <div className="hidden sm:flex items-center space-x-6 justify-end flex-1">
            <ul className="flex list-none flex-row gap-10">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.id ? "text-white" : "text-secondary"
                  } cursor-pointer text-[18px] font-medium hover:text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            {/* GitHub and LinkedIn Icon Links */}
            <div className="flex items-center space-x-4 ml-auto">
              <a
                href="https://github.com/alokpratapjadon"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <img
                  src={githubLogo}
                  alt="GitHub"
                  className="h-6 w-6 cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alok-pratap-jadon-3b9310273/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  className="h-6 w-6 cursor-pointer filter brightness-0 invert"
                />
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex flex-1 items-center justify-end sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-[28px] w-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
            >
              <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins cursor-pointer text-[16px] font-medium ${
                      active === nav.id ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Logo Overlay */}
      {showFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setShowFullscreen(false)}
        >
          <img
            src={myPhoto}
            alt="Fullscreen Logo"
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
