import { NavLink } from "react-router";
import { useTheme } from "~/context/ThemeContext";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-light-primary dark:bg-dark-primary shadow-lg transition-colors duration-200">
            <div className="container px-40 mx-auto">
                <div className="flex items-center justify-between h-16">
                    <NavLink to="/" className="flex items-center">
                        <img 
                            className="h-[70px] w-auto" 
                            src="https://www.svgrepo.com/show/399134/world-map.svg" 
                            alt="World Map"
                        />
                        <span className="ml-2 text-xl font-bold text-light-text dark:text-dark-text">
                            Countries
                        </span>
                    </NavLink>

                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                                ${isActive 
                                    ? 'bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text'
                                    : 'text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/countries"
                            className={({ isActive }) =>
                                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                                ${isActive 
                                    ? 'bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text'
                                    : 'text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary'
                                }`
                            }
                        >
                            Countries
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                                ${isActive 
                                    ? 'bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text'
                                    : 'text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary'
                                }`
                            }
                        >
                            About
                        </NavLink>

                        <button
                            onClick={toggleTheme}
                            className="ml-4 px-4 py-2 rounded-md bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text hover:opacity-80 transition-all duration-200"
                        >
                            {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
