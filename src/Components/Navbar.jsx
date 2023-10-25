import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';  // Use to get Current User

import LogoDT from '../Assets/icon-dt-small.png';
import LogoMB from '../Assets/icon-mb-small.png';
import RoofingIcon from '@mui/icons-material/Roofing';

import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

const Navbar = () => {
    
    const [logo, setLogo] = useState(LogoDT);
    const [text, setText] = useState(true);

    const { currentUser } = useSelector((state) => state.user);  // Use to get Current User


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
        <header className="w-full h-full flex md:flex-col justify-between items-center static py-2 md:py-10 xl:py-5 md:px-1">
            <nav className="w-full flex md:flex-col md:h-4/5">
                <div className="w-full md:h-4/5 xl:px-2 flex md:flex-col justify-center md:justify-between md:mb-[25vh] xl:mb-[15vh]">
                    <div
                        to="/profile"
                        className="flex xl:flex-col xl:items-start md:self-center"
                    >
                        <div className="flex w-full md:justify-center md:justify-between">
                            <div className="w-14 h-14 xl:w-32 xl:h-32 border-2 hover:border-4 rounded-full">
                                <Link to="settings/user-account">
                                    <img src={currentUser.avatar} className="w-full h-full rounded-full" />
                                </Link> 
                            </div>
                            <Link to="settings/user-account" 
                                className="hidden xl:inline h-8 uppercase font-medium text-white text-sm xl:text-xl hover:drop-shadow-3xl hover:bg-stone-600 rounded-3xl"
                            >
                                edit
                            </Link>
                        </div>
                        {text === true ? <h1 className="w-full my-3 text-2xl font-medium tracking-wide text-white mx-1">{currentUser.firstname}</h1> : null}
                    </div>
                    { text === true ? <div className="flex flex-col xl:flex-row items-center w-full border-y border-[#ECEEF0] py-4">
                        <div className="h-full w-full flex flex-col justify-center items-center xl:border-r">
                            <div>
                                <p className="uppercase text-stone-300 font-medium ">height</p>
                                <h1 className="w-full text-xl font-medium tracking-wide text-white">{currentUser.height}<span className="ms-1 text-stone-300 font-medium">cm</span></h1>
                            </div>
                        </div>
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <div>
                                <p className="uppercase text-stone-300 font-medium">weight</p>
                                <h1 className="w-full text-xl font-medium tracking-wide text-white">{currentUser.weight}<span className="ms-1 text-stone-300 font-medium">kg</span></h1>
                            </div>
                        </div>
                    </div> : null}
                    <div 
                        className="flex flex-row md:flex-col md:h-full md:mt-10 md:gap-4 md:justify-around"
                    >
                        <NavLink
                            to="/"
                            className="flex items-center hover:bg-stone-600 py-1 px-2 rounded-3xl"
                        >
                            <RoofingIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                            {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Home</h1> : null}
                        </NavLink>
                        <NavLink
                            to="/form"
                            className="flex items-center hover:bg-stone-600 py-1 px-2 rounded-3xl"
                        >
                            <SportsMartialArtsIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                            {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Exercise</h1> : null}
                        </NavLink>
                        <NavLink
                            to="/statistic"
                            className="flex items-center hover:bg-stone-600 py-1 px-2 rounded-3xl"
                        >
                            <InsightsIcon sx={{ fontSize: 40 }} className="text-white mx-2" />
                            {text === true ? <h1 className="mx-2 text-xl font-bold text-white">Record</h1> : null}
                        </NavLink>
                        <NavLink 
                            to='/settings' 
                            className="flex items-center hover:bg-stone-600 py-1 px-2 rounded-3xl">
                            <SettingsIcon sx={{ fontSize: 40 }} className="text-white mx-2" /> 
                            {text === true ? <h1 className="text-xl font-bold text-white mx-2">Setting</h1> : null}
                        </NavLink>
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