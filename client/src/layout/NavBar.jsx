import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../ui/HamburgerMenu";
import Cross from "../ui/Cross";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const links = [
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Resources", path: "/resources" },
    { name: "Pricing", path: "/pricing" },
    { name: "Log in", path: "/login" },
    { name: "Sign up", path: "/signup" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <header className="pb-6 bg-white lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex">
                <img
                  className="w-auto h-8 lg:h-10"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {menuOpen ? <Cross /> : <HamburgerMenu />}
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              to="/get-started"
              className="hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            >
              Get started now
            </Link>
          </nav>

          <nav
            className={`lg:hidden transition-transform duration-300 ease-in-out ${
              menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <div className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md">
              <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-6 mt-6">
                <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                >
                  Get started now
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
