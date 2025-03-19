import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/codesino_logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const baseClasses =
        "font-bold text-xs px-2 py-1 border- rounded-lg transition duration-300 mx-2";
    const activeClasses = "text-white bg-blue-500 border-blue-800";
    const inactiveClasses =
        "text-blue-700 border-blue-600 hover:bg-blue-300 hover:text-white";

    const handleScrollToSection = (id) => {
        if (location.pathname !== "/") {
            navigate(`/#${id}`);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                setActiveSection(id);
            }
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const buttons = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `${baseClasses} ${
                        isActive && !activeSection ? activeClasses : inactiveClasses
                    }`
                }
                onClick={(e) => {
                    if (location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                        window.location.href = "/";
                    }
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/services"
                className={({ isActive }) =>
                    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
                onClick={() => window.scrollTo(0, 0)}
            >
                Services
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
                onClick={() => window.scrollTo(0, 0)}
            >
                About Us
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
                onClick={() => window.scrollTo(0, 0)}
            >
                Contact
            </NavLink>
            <NavLink
                to="blog"
                className={({ isActive }) =>
                    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
                onClick={() => window.scrollTo(0, 0)}
            >
                Blog
            </NavLink>
        </>
    );

    return (
        <nav className="bg-head shadow text-black fixed w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex flex-row w-full justify-between">
                        <div className="flex items-center">
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo(0, 0);
                                    window.location.href = "/";
                                }}
                            >
                                <img
                                    src={Logo}
                                    alt="Codesino logo"
                                    className="h-20 mr-2 hover:opacity-99 hover:scale-105 transition duration-300"
                                />
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-10 h-full">
                                {buttons}
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                            type="button"
                            className="text-blue-500 hover:text-blue-500"
                        >
                            <svg
                                className="h-4 w-4 text-black hover:text-blue-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="flex flex-col text-center gap-y-2 md:hidden px-4 sm:px-6 pb-2">
                    {buttons}
                </div>
            )}
        </nav>
    );
};

export default Header;