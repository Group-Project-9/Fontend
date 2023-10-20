import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoDT from '../assets/icon-dt-small.png';
import LogoMB from '../assets/icon-mb-small.png';
import UserTest from '../assets/user-test.png';
import RoofingIcon from '@mui/icons-material/Roofing';

import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

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
        <header className="w-full h-full flex md:flex-col justify-between items-center static md:p-2 xl:p-3 ">
            <nav className="w-full flex md:flex-col md:h-4/5 ">
                <div className="w-full md:h-4/5 xl:px-2 flex md:flex-col justify-center md:justify-between md:mb-[25vh] xl:mb-[15vh]">
                    <div
                        to="/profile"
                        className="flex xl:flex-col xl:items-start py-3 mx-2 md:mx-0"
                    >
                        <div className="flex w-full md:justify-center md:justify-between">
                            <div className="w-14 h-14 xl:w-32 xl:h-32 border-2 rounded-full">
                                <img src={UserTest} className="w-full h-full rounded-full" />
                            </div>
                            <Link to="settings/user-account" 
                                className="hidden xl:inline w-1/5 h-8 uppercase font-medium text-white text-sm xl:text-xl hover:drop-shadow-xl "
                            >
                                edit
                            </Link>
                        </div>
                        {text === true ? <h1 className="w-full my-3 text-2xl font-medium tracking-wide text-white mx-1">Hugh Jackman</h1> : null}
                    </div>
                    { text === true ? <div className="flex flex-col xl:flex-row items-center w-full border-y border-[#ECEEF0] py-4">
                        <div className="h-full w-full flex flex-col justify-center items-center xl:border-r">
                            <div>
                                <p className="uppercase text-stone-300 font-medium ">height</p>
                                <h1 className="w-full text-xl font-medium tracking-wide text-white">{`190`}<span className="ms-1 text-stone-300 font-medium">cm</span></h1>
                            </div>
                        </div>
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div>
                                <p className="uppercase text-stone-300 font-medium">weight</p>
                                <h1 className="w-full text-xl font-medium tracking-wide text-white">{`85`}<span className="ms-1 text-stone-300 font-medium">kg</span></h1>
                            </div>
                        </div>
                    </div> : null}
                    <div 
                        className="flex flex-row md:flex-col md:h-auto"
                    >
                        <NavLink
                            to="/"
                            className="flex items-center md:my-5 mx-2 md:mx-0"
                        >
                            <RoofingIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                            {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Home</h1> : null}
                        </NavLink>
                        <NavLink
                            to="/form"
                            className="flex items-center md:my-5 mx-2 md:mx-0"
                        >
                            <SportsMartialArtsIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                            {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Record</h1> : null}
                        </NavLink>
                        <NavLink
                            to="/"
                            className="flex items-center md:my-5 mx-2 md:mx-0"
                        >
                            <InsightsIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                            {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Statistics</h1> : null}
                        </NavLink>
                        <div className="md:w-full flex md:flex-col md:h-[10vh] justify-center md:justify-between mx-2 md:mx-0">
                         <Link to='/settings' className="h-full w-full flex flex-row items-center">
                            <SettingsIcon sx={{ fontSize: 40 }} className="text-white md:mx-2 xl:mx-2" /> 
                            {text === true ? <h1 className="text-xl font-bold text-white mx-2">Setting</h1> : null}
                        </Link>
                </div>
                    </div>
                    
                </div>
                
            </nav>
            <div className="md:flex md:items-center md:justift-center h-fit w-fit md:h-1/5 md:w-full p-1 m-1 xl:p-2 xl:m-2 hidden md:inline">
                <Link to="/">
                    <img src={logo} alt="navbar-icon" className="d:w-full h-auto" />
                </Link>
            </div>
        </header>
    )
}

export default Navbar