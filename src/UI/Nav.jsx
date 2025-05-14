import { Moon, Sun, SunMoon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "/LOGO-noBackground.png";
import { NavButton } from "../components/Button";
import { BookMarked } from "lucide-react";

// Smooth scroll helper
const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // For mobile and desktop nav links
    const handleNavClick = (e, id) => {
        e.preventDefault();
        closeMenu();
        scrollToSection(id);
    };

    // For waitlist button
    const handleWaitlistClick = (e) => {
        e.preventDefault();
        closeMenu();
        scrollToSection("waitlist");
    };

    return (
        <header 
            style={scrolled ? { boxShadow: '0 0 20px 3px #b7bcc4' } : {}} 
            className={`flex justify-around items-center text-white p-2 px-4 fixed top-0 transition-all duration-800 z-50 w-full
                ${scrolled 
                    ? 'md:translate-x-50 md:top-2 md:rounded-4xl md:w-3/4 backdrop-blur-md' 
                    : 'bg-transparent'
                }`}
        >
            <div className="flex items-center justify-between w-full md:w-1/2 gap-4 md:gap-20 h-full">
                <div className="min-w-[130px]">
                    <img src={Logo} alt="Can't load logo" className="h-12 w-auto rounded-md" />
                </div>
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6 p-1 whitespace-nowrap h-full">
                        <li className="hover:text-blue-400">
                            <a href="#features" onClick={e => handleNavClick(e, "features")}>Features</a>
                        </li>
                        <li className="hover:text-blue-400">
                            <a href="#how-it-works" onClick={e => handleNavClick(e, "how-it-works")}>How it works</a>
                        </li>
                        <li className="hover:text-blue-400">
                            <a href="#wcu" onClick={e => handleNavClick(e, "wcu")}>About us</a>
                        </li>
                        <li className="hover:text-blue-400">
                            <a href="#faq" onClick={e => handleNavClick(e, "faq")}>FAQ</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Desktop Right Section */}
            <div className="hidden md:flex w-full h-full justify-end pr-10 items-center">
                <ul className="flex gap-4 p-1 whitespace-nowrap h-full items-center">
                    <li>
                        <a href="#waitlist" onClick={e => handleNavClick(e, "waitlist")}>
                            <NavButton
                                label={<><span>Join waitlist </span><BookMarked size={16} /></>}
                                onClick={handleWaitlistClick}
                            />
                        </a>
                    </li>
                    <li className="hover:text-blue-400">
                        <a href="#feedback" onClick={e => handleNavClick(e, "feedback")}>Feedback</a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden hamburger-button p-2 z-50"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu */}
            <div 
                className={`mobile-menu fixed top-0 right-0 h-screen w-64 bg-zinc-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
                    md:hidden`}
            >
                <div className="flex flex-col h-full p-6">
                    <div className="flex justify-end mb-8">
                        <button 
                            onClick={closeMenu}
                            className="p-2 hover:text-blue-400"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="flex-1">
                        <ul className="space-y-6">
                            <li className="hover:text-blue-400">
                                <a href="#features" onClick={e => handleNavClick(e, "features")}>Features</a>
                            </li>
                            <li className="hover:text-blue-400">
                                <a href="#how-it-works" onClick={e => handleNavClick(e, "how-it-works")}>How it works</a>
                            </li>
                            <li className="hover:text-blue-400">
                                <a href="#wcu" onClick={e => handleNavClick(e, "wcu")}>About us</a>
                            </li>
                            <li className="hover:text-blue-400">
                                <a href="#faq" onClick={e => handleNavClick(e, "faq")}>FAQ</a>
                            </li>
                            <li className="pt-4">
                                <NavButton 
                                    label={<><span>Join waitlist </span><BookMarked size={16} /></>}
                                    onClick={handleWaitlistClick}
                                />
                            </li>
                            <li className="hover:text-blue-400">
                                <a href="#feedback" onClick={e => handleNavClick(e, "feedback")}>Feedback</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Nav;