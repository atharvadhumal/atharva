import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { LuContactRound } from "react-icons/lu";

export const navItems = [
    {
        label: "Home",
        href: "/",
        icon: <AiOutlineHome />
    },
    {
        label: "About",
        href: "/about",
        icon: <AiOutlineUser />
    },
    {
        label: "Projects",
        href: "/projects",
        icon: <AiOutlineFundProjectionScreen />
    },
    {
        label: "Resume",
        href: "/resume",
        icon: <CgFileDocument />
    },
    {
        label: "Contact",
        href: "/contact",
        icon: <LuContactRound />
    },
];