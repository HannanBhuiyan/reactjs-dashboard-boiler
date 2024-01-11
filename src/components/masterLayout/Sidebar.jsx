import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGauge, faCartShopping, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useRef, useState } from "react";


const Sidebar = () => {

    const location = useLocation() 

    let subMenuRef, arrowIconRef = useRef();


    const subMenuHandler = () => {
       let submenu = subMenuRef
       let arrowIcon = arrowIconRef
       if(submenu.classList.contains("close-sub-menu")){
            submenu.classList.add("open-sub-menu") 
            arrowIcon.classList.add("menu-icon")
            submenu.classList.remove("close-sub-menu") 
            arrowIcon.classList.remove("menu-rv-icon")
       }
       else {
            submenu.classList.remove("open-sub-menu")
            submenu.classList.add("close-sub-menu") 
            arrowIcon.classList.remove("menu-icon")
            arrowIcon.classList.add("menu-rv-icon")
       }
    }


    useEffect(() => {
        let submenu = subMenuRef 
        let arrowIcon = arrowIconRef
        if(location.pathname === '/demo' || location.pathname === '/demo-two'){
            if(submenu.classList.contains("close-sub-menu")){
                submenu.classList.add("open-sub-menu") 
                arrowIcon.classList.add("menu-icon")
                submenu.classList.remove("close-sub-menu") 
           }
           else {
                submenu.classList.remove("open-sub-menu")
                submenu.classList.add("close-sub-menu") 
           }
        }
    },[])
    


    return(
        <>
            <div className="sidebar_menu text-white pb-[20px]">
                <ul> 
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] max-xl:px-[10px]">
                        <NavLink to="/dashboard" className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px]" }> 
                            <FontAwesomeIcon className="text-primaryColor" icon={faCartShopping} />
                            <span className="text-truncate pl-[12px] py-[12px] w-full flex max-lg:text-[14px] max-xl:text-[15px]">Dashboard</span> 
                        </NavLink>
                    </li> 
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] max-xl:px-[10px]">
                        <NavLink to="/product" className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px]" }> 
                            <FontAwesomeIcon className="text-primaryColor" icon={faCartShopping} />
                            <span className="text-truncate pl-[12px] py-[12px] w-full flex max-lg:text-[14px] max-xl:text-[15px]">Product Category Category Category</span> 
                        </NavLink>
                    </li> 
                    <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] max-xl:px-[10px]">
                        <NavLink to="/category" className={({isActive}) => isActive  ? "flex items-center bg-[#051f3e] px-[20px] " : "flex items-center px-[20px]" }> 
                            <FontAwesomeIcon className="text-primaryColor" icon={faCartShopping} />
                            <span className="text-truncate pl-[12px] py-[12px] w-full flex max-lg:text-[14px] max-xl:text-[15px]">Category</span> 
                        </NavLink>
                    </li>
                    <li className="submenuLi text-[17px] font-robotoFont border-b border-1 border-[#021933]">
                        <NavLink className="flex justify-between items-center cursor-pointer" onClick={subMenuHandler}>
                            <div className="m-left-item flex items-center px-[20px] max-xl:px-[10px] " >
                                <FontAwesomeIcon className="text-primaryColor" icon={faFaceSmile} />
                                <span className="text-truncate pl-[12px] py-[12px] w-full flex max-lg:text-[14px] max-xl:text-[15px]">Demo Page</span>
                            </div> 
                            <div ref={(input) =>arrowIconRef=input }  className="pr-[12px] ">
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </div>
                        </NavLink> 
                        <ul ref={(div) => subMenuRef=div} className="close-sub-menu w-full bg-[#051f3e] pt-3 pb-1 h-full">
                            <li className="flex mb-2">
                                <NavLink to="/demo" className={({isActive}) => isActive ? 'bg-[#042954] w-full block' : 'w-full'}>
                                    <div className="hover:bg-[#042954] flex items-center w-full pl-[60px] py-[10px] max-xl:px-[10px]">
                                        <FontAwesomeIcon className=" text-primaryColor text-[12px] mr-2" icon={faCircle} /> 
                                        <span className="text-truncate text-[15px] font-robotoFont " >Demo One</span>
                                    </div> 
                                </NavLink>
                            </li>
                            <li className="flex mb-2">
                                <NavLink to="/demo-two" className={({isActive}) => isActive ? 'bg-[#042954] w-full block' : 'w-full'}>
                                    <div className="hover:bg-[#042954] flex items-center w-full pl-[60px] py-[10px] max-xl:px-[10px]">
                                        <FontAwesomeIcon className="text-[12px] mr-2 text-primaryColor" icon={faCircle} /> 
                                        <span className="text-truncate text-[15px] font-robotoFont " >Demo One</span>
                                    </div> 
                                </NavLink>
                            </li>
                        </ul> 
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar