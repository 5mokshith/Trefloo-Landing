    import { Moon, Sun, SunMoon } from "lucide-react";
    import { useState, useEffect } from "react";
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
            <header style={scrolled ? { boxShadow: '0 0 10px 3px rgba(255, 191, 0, 0.2)' } : {}} className={`flex justify-between  items-center text-white px-6 py-4 fixed top-0 transition-all duration-800 z-50  ${scrolled ? 'translate-x-100 top-2 rounded-4xl w-2/4 backdrop-blur-md' : 'bg-transparent w-full'}`}>
                <div className="flex items-center justify-start w-1/2 gap-20 ml-26">
                    <div className="text-white font-bold text-xl whitespace-nowrap
">Mokshith rao</div>
                    <nav>
                        <ul className="flex gap-6 p-1 whitespace-nowrap
">
                            <li className="hover:text-blue-400"><a href="#">About</a></li>
                            <li className="hover:text-blue-400"><a href="#">Projects</a></li>
                            <li className="hover:text-blue-400"><a href="#skills">Tech Stack</a></li>
                            <li className="hover:text-blue-400"><a href="#">contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="rounded-full p-1 border-1 border-transparent hover:border-amber-50 active:border-transparent cursor-pointer transistion-all" onClick={toggleTheme}>
                {theme? <Sun color="white"/> : <SunMoon color="white"/>}
                </div>
            </header>
        );
    }

    export default Nav;