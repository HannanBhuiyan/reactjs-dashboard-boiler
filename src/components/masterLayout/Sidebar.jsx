import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGauge, faCartShopping, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";


const Sidebar = () => {

    const location = useLocation()
    const [subMenu, setSubMenu] = useState(false)

    const subMenuHandler = () => {
        setSubMenu((prev) => !prev)
    }

    useEffect(() => {
        if(location.pathname === '/demo' || location.pathname === '/demo-two'){
            setSubMenu(true)
        }
    },[subMenu])
   

    return(
        <>
            <div className="sidebar_menu text-white pb-[20px]">
                <ul>
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] px-[20px] py-[5px] " >
                        <NavLink   to="/" className="flex items-center">
                            <FontAwesomeIcon icon={faGauge} />
                            <span className="pl-[12px] py-[8px] w-full block">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] px-[20px] py-[5px] " >
                        <NavLink to="/product" className="flex items-center">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="pl-[12px] py-[8px] w-full block">Product</span> 
                        </NavLink>
                    </li>
                    <li className={`text-[17px] font-robotoFont py-[5px] border-b border-1 border-[#021933] ${subMenu === false ? "hover:bg-[#051f3e]" : ''} `} >
                        <div className="flex justify-between items-center cursor-pointer " onClick={subMenuHandler}>
                            <div className="m-left-item flex items-center px-[20px] " >
                                <FontAwesomeIcon icon={faFaceSmile} />
                                <span className="pl-[12px] py-[8px] w-full block">Demo Page</span>
                            </div> 
                            <div className="menu-icon pr-[12px] ">
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </div>
                        </div>
                        <ul className={`w-full bg-[#051f3e] py-3 h-full ${subMenu === false ? "hidden": "" }`}>
                            <li className="flex mb-1">
                                <NavLink to="/demo" className={({isActive}) => isActive ? 'bg-[#042954] w-full block' : 'w-full'}>
                                    <div className="hover:bg-[#042954] block w-full pl-[60px] py-[7px]">
                                        <FontAwesomeIcon className="text-[12px] mr-2" icon={faCircle} /> 
                                        <span className="text-[15px] font-robotoFont " >Demo One</span>
                                    </div> 
                                </NavLink>
                            </li>
                            <li className="flex mb-1">
                                <NavLink to="/demo-two" className={({isActive}) => isActive ? 'bg-[#042954] w-full block' : 'w-full'}>
                                    <div className="hover:bg-[#042954] block w-full pl-[60px] py-[7px]">
                                        <FontAwesomeIcon className="text-[12px] mr-2" icon={faCircle} /> 
                                        <span className="text-[15px] font-robotoFont " >Demo One</span>
                                    </div> 
                                </NavLink>
                            </li>
                            
                        </ul>
                    </li>
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] px-[20px] py-[5px] " >
                        <NavLink className="flex items-center">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="pl-[12px] py-[8px] w-full block">Product</span> 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar