import { Moon, Sun, SunMoon } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "/LOGO-cropped.png";
import { NavButton } from "../components/Button";
function Nav() {
    const [theme, setTheme] = useState(true);
    const [scrolled, setScrolled] = useState(false);

function toggleTheme() {
    setTheme(!theme);
}

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
    return(
        <header style={scrolled ? { boxShadow: '0 0 10px 3px rgba(255, 191, 0, 0.2)' } : {}} className={`flex justify-around items-center text-white p-2 px-4  fixed top-0 transition-all duration-800 z-50  ${scrolled ? 'translate-x-50 top-2 rounded-4xl w-3/4 backdrop-blur-md' : 'bg-transparent w-full'}`}>
            <div className="flex items-center justify-start w-1/2 gap-20 h-full">
                <div className="min-w-[130px]">
                    <img src={Logo} alt="Can't load logo" className="h-12 w-auto rounded-md" />
                </div>
                <nav>
                    <ul className="flex gap-6 p-1 whitespace-nowrap h-full">
                        <li className="hover:text-blue-400"><a href="#">Features</a></li>
                        <li className="hover:text-blue-400"><a href="#">How it works</a></li>
                        <li className="hover:text-blue-400"><a href="#skills">About us</a></li>
                        <li className="hover:text-blue-400"><a href="#">FAQ</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex w-full h-full justify-around items-center" onClick={toggleTheme}>
            <ul className="flex gap-4 p-1 whitespace-nowrap h-full items-center">
                <li><NavButton label="Join waitlist"></NavButton></li>
                <li className="hover:text-blue-400"><a href="#">Feedback</a></li>
            </ul>
            </div>
        </header>
    );
}

export default Nav;