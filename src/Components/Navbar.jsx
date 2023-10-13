import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoDT from '../assets/icon-dt.png';
import LogoMB from '../assets/icon-mb.png';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
    
    const [logo, setLogo] = useState(LogoDT);
    const [text, setText] = useState(true);

    const handleLogoChange = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1279) {
            setLogo(LogoMB);
            setText(false);
        } else {
            setLogo(LogoDT);
            setText(true);
        }
    };

    useEffect(() => {
        handleLogoChange(); 
        window.addEventListener("resize", handleLogoChange);
        return () => {
            window.removeEventListener("resize", handleLogoChange);
        };
    }, []);

    return (
        <header className="flex flex-col items-center static w-20 xl:w-60 h-full p-3 bg-black rounded-3xl">
            <Link to="/" className="h-30">
                <img src={logo} alt="navbar-icon" className="w-40 pb-6 pt-4" />
            </Link>
            <nav className="w-full flex flex-col ">
                <div className="w-full h-[45vh] xl:px-5 flex flex-col justify-between mb-[25vh] xl:mb-[15vh]">
                    <NavLink
                        to="/"
                        className="flex items-center "
                    >
                        <HomeIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                        {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Home</h1> : null}
                    </NavLink>
                    <NavLink
                        to="#"
                        className="flex items-center"
                    >
                        <SearchIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                        {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Search</h1> : null}
                    </NavLink>
                    <NavLink
                        to="#"
                        className="flex items-center"
                    >
                        <FlagIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                        {text === true ? <h1 className="mx-2 text-xl font-bold text-white">My goals</h1> : null}
                    </NavLink>
                    <NavLink
                        to="#"
                        className="flex items-center"
                    >
                        <InsightsIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                        {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Statistics</h1> : null}
                    </NavLink>
                    <NavLink
                        to="#"
                        className="flex items-center"
                    >
                        <Badge color="secondary" badgeContent={100}>
                            <NotificationsIcon  sx={{ fontSize: 40 }} className="text-white mx-2"/>
                        </Badge>
                        {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Notification</h1> : null}
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className="flex items-center"
                    >
                        <AccountCircleIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                        {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Profile</h1> : null}
                    </NavLink>
                </div>
                <div className="w-full flex flex-col h-[10vh]  justify-between xl:px-5">
                    <Link to='/settings' className="flex flex-row items-center">
                        <SettingsIcon sx={{ fontSize: 40 }} className="text-white mx-2" /> 
                        {text === true ? <h1 className="text-xl font-bold text-white">Setting</h1> : null}
                    </Link>
                    <div className="flex flex-row items-center">
                        <LogoutIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                        {text === true ? <h1 className="text-xl font-bold text-white">Logout</h1> : null}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar