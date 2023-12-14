import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGauge, faCartShopping, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useRef, useState } from "react";


const Sidebar = () => {

    const location = useLocation()
    // const [subMenu, setSubMenu] = useState(false)

    let subMenuRef = useRef();


    const subMenuHandler = () => {
       let submenu = subMenuRef

       if(submenu.classList.contains("close-sub-menu")){
            submenu.classList.add("open-sub-menu")
            submenu.classList.remove("close-sub-menu")
            // submenu.style.transition = "all .3s";
       }
       else {
            submenu.classList.remove("open-sub-menu")
            submenu.classList.add("close-sub-menu")
            // submenu.style.transition = "all .3s";
            
       }

      
       
    }


    const handleChange = () => {
        console.log("sdfasd")
    }

    // useEffect(() => {
    //     if(location.pathname === '/demo' || location.pathname === '/demo-two'){
    //         setSubMenu(true)
    //     }
    // },[subMenu])
    
    // console.log("hello")

    return(
        <>
            <div className="sidebar_menu text-white pb-[20px]">
                <ul>
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] py-[5px] max-xl:px-[10px] " >
                        <NavLink onClick={handleChange} className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px] " }>
                            <FontAwesomeIcon icon={faGauge} />
                            <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px]">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] py-[5px] max-xl:px-[10px]" >
                        <NavLink to="/product" className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px] " }>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px]">Product</span>
                        </NavLink>
                    </li>
                    <li className=" submenuLi text-[17px] font-robotoFont py-[5px] border-b border-1 border-[#021933]">
                        <div className="flex justify-between items-center cursor-pointer " onClick={subMenuHandler}>
                            <div className="m-left-item flex items-center px-[20px] max-xl:px-[10px] " >
                                <FontAwesomeIcon icon={faFaceSmile} />
                                <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px] ">Demo Page</span>
                            </div> 
                            <div className="menu-icon pr-[12px] ">
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </div>
                        </div> 
                        <ul ref={(div) => subMenuRef=div} className="close-sub-menu w-full bg-[#051f3e] py-3 h-full">
                            <li className="flex mb-1">
                                <NavLink to="/demo" className={({isActive}) => isActive ? 'bg-[#042954] w-full block' : 'w-full'}>
                                    <div className="hover:bg-[#042954] block w-full pl-[60px] py-[7px] max-xl:px-[10px]">
                                        <FontAwesomeIcon className="text-[12px] mr-2" icon={faCircle} /> 
                                        <span className="text-[15px] font-robotoFont " >Demo One</span>
                                    </div> 
                                </NavLink>
                            </li>
                            <li className="flex mb-1">
                                <NavLink to="/demo-two" className={({isActive}) => isActive ? 'bg-[#042954] w-full block' : 'w-full'}>
                                    <div className="hover:bg-[#042954] block w-full pl-[60px] py-[7px] max-xl:px-[10px]">
                                        <FontAwesomeIcon className="text-[12px] mr-2" icon={faCircle} /> 
                                        <span className="text-[15px] font-robotoFont " >Demo One</span>
                                    </div> 
                                </NavLink>
                            </li>
                            
                        </ul> 
                      
                    </li>
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] px-[20px] py-[5px] max-xl:px-[10px] " >
                        <NavLink className="flex items-center">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="pl-[12px] py-[8px] w-full block max-lg:text-[14px] max-xl:text-[15px]">Product</span> 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar