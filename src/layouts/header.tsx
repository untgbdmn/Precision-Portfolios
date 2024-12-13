import { Link, NavLink } from "react-router-dom";
import { useTheme } from "@/components/theme-provider"
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [nav, setNav] = useState(true);
    const { t, i18n } = useTranslation();
    const isdark = theme !== "light";

    const toggleLanguage = () => {
        const newLang = i18n.language === 'id' ? 'en' : 'id';
        i18n.changeLanguage(newLang);
    };

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <>
            <div className="flex flex-row items-center justify-between sticky px-3 py-3 rounded-md top-2 backdrop-blur dark:bg-white/5 bg-black/5 z-[9999]">
                <Link to={'/'} className="text-lg font-semibold text__gradient">Untung Budiman</Link>


                <div className="lg:flex flex-row items-center justify-end gap-5 hidden">
                    <div className="flex flex-row items-center gap-1">
                        <NavLink
                            to="/" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('home')}
                        </NavLink>
                        <NavLink
                            to="/about" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('about')}
                        </NavLink>
                        <NavLink
                            to="/skill" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('skill')}
                        </NavLink>
                        <NavLink
                            to="/portofolio" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('portofolio')}
                        </NavLink>
                        <NavLink
                            to="/contact" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('contact')}
                        </NavLink>
                    </div>
                    <div className="h-5 w-[2px] dark:bg-white bg-black"></div>
                    <div className="flex flex-row-reverse items-center justify-center gap-3">
                        <button className="" onClick={() => setTheme(isdark ? "light" : "dark")}>
                            {isdark ? (
                                <Sun className="h-5 w-5 text-yellow-500 transition-all duration-200" />
                            ) : (
                                <Moon className="h-5 w-5 text-blue-500 transition-all duration-200" />
                            )}
                        </button>
                        <select
                            className="bg-transparent w-[50px] min-w-[50px]"
                            onChange={(e) => i18n.changeLanguage(e.target.value)}>
                            <option value="en" className="dark:bg-black dark:text-white bg-white text-black">EN</option>
                            <option value="id" className="dark:bg-black dark:text-white bg-white text-black">ID</option>
                        </select>
                    </div>
                </div>

                <div className="lg:hidden block">
                    {nav ? (
                        <Menu onClick={handleNav} className="h-6 w-6 cursor-pointer" />
                    ) : (
                        <X onClick={handleNav} className="h-6 w-6 cursor-pointer" />
                    )}
                </div>
            </div>

            <div className={`${nav ? '-translate-x-[2000px]' : 'translate-x-0'} relative mt-3 transition-transform duration-700`} onClick={handleNav}>
                <div className="absolute inset-x-0" onClick={handleNav}>
                    <div className="dark:bg-white/30 bg-black/5 rounded-md backdrop-blur-md flex flex-col items-center gap-2 w-1/3 py-2">
                        <NavLink
                            to="/" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('home')}
                        </NavLink>
                        <NavLink
                            to="/about" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('about')}
                        </NavLink>
                        <NavLink
                            to="/skill" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('skill')}
                        </NavLink>
                        <NavLink
                            to="/portofolio" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('portofolio')}
                        </NavLink>
                        <NavLink
                            to="/contact" className={({ isActive }) =>
                                isActive ? 'active__navlink' : 'default__navlink'
                            }>
                            {t('contact')}
                        </NavLink>
                    </div>
                    <div className="flex flex-row-reverse items-center justify-center gap-3 mt-4 w-1/3 dark:bg-white/30 py-2 bg-black/5 rounded-md">
                        <button className="" onClick={() => setTheme(isdark ? "light" : "dark")}>
                            {isdark ? (
                                <Sun className="h-5 w-5 text-yellow-500 transition-all duration-200" />
                            ) : (
                                <Moon className="h-5 w-5 text-blue-500 transition-all duration-200" />
                            )}
                        </button>
                        <button onClick={toggleLanguage} className="text-lg">
                            {i18n.language === 'id' ? 'ID' : 'EN'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
