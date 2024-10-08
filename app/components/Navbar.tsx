import { Link, useLocation } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

import configs from "~/configs/configs";
import EmailIcon from "./icons/EmailIcon";
import XIcon from "./icons/XIcon";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import HamburgerIcon from "./icons/HamburgerIcon";

const socialKeyToIcon = (key: string) => {
  switch (key) {
    case "email":
      return <EmailIcon />;
    case "x":
      return <XIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "github":
      return <GithubIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "linkedin":
      return <LinkedinIcon />;
  }
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`text-2xl rounded-b-2xl font-blackOpsOne flex justify-between items-center px-4 py-2 sticky top-0 z-50`}
      style={{ backgroundColor: configs.colors.primary }}
    >
      <Link to="/" className="flex items-center">
        <img src="pictures/icon.png" alt="icon" className="w-9 h-9 mr-2" />
        <span className="font-bold text-black hidden sm:block">
          {configs.name}
        </span>
      </Link>
      <div className="hidden lg:flex space-x-6">
        {configs.pages.map((pageName, index) => (
          <Link
            to={`/${pageName}`}
            key={index}
            className={
              location.pathname.includes(pageName)
                ? "text-gray-500 underline underline-offset-4"
                : "text-black"
            }
          >
            {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
          </Link>
        ))}
      </div>
      <div className="flex space-x-4">
        {Object.entries(configs.navBar.socialMediaLinks).map(
          ([key, value], index) => {
            return value ? (
              <a
                href={key === "email" ? `mailto:${value}` : value}
                key={index}
                className="text-black text-base"
                target="_blank"
                rel="noreferrer"
              >
                {socialKeyToIcon(key)}
              </a>
            ) : null;
          }
        )}
      </div>
      <div ref={menuRef} className="text-black text-2xl lg:hidden relative">
        <button onClick={toggleMenu} className="flex justify-center">
          <HamburgerIcon />
        </button>
        {isMenuOpen && (
          <div className="px-2 flex flex-col absolute right-0 mt-4 w-auto bg-[#FFD562] shadow-lg rounded-lg">
            {configs.pages.map((page, index) => (
              <Link
                to={`/${page}`}
                key={index}
                className={
                  location.pathname.includes(page) ||
                  (location.pathname === "/" && page === "about")
                    ? "text-gray-500 underline underline-offset-4"
                    : "text-black"
                }
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
