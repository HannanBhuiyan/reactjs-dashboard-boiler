import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faEnvelope, faBell, faCheck, faChevronRight, faReceipt, faPowerOff, faGauge, faCartShopping, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import admin_img from '../../assets/images/admin.jpg'; 


const MasterLayout = () => {

    const refOne = useRef(null)
    const [sidebar, setSidebar] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [notification, setNitification] = useState(false)
    const [message, setMessage] = useState(false)
    const [subMenu, setSubMenu] = useState(false)


    const adminHandler = () => {
        setAdmin((prevAdmin) => !prevAdmin)
        setNitification(false)
        setMessage(false)
    }
 
    const notificationHandler = () => {
        setNitification((prevNoti) => !prevNoti)
        setAdmin(false)
        setMessage(false)
    }
 
    const messageHandler = () => {
        setMessage((prevMsg) => !prevMsg)
        setNitification(false)
        setAdmin(false)
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutSide, true)
    },[])

    const handleClickOutSide = (e) => {
        if(!refOne.current.contains(e.target)){
            setNitification(false)
            setAdmin(false)
            setMessage(false)
        } 
    }

    const subMenuHandler = () => {
        setSubMenu((prevSub) => !prevSub)
    }


    return(
        <>
            <div className="main_section flex " >
                <div className={`sidebar bg-[#042954] min-h-screen ${sidebar === true ? 'w-[15%]': 'w-0'}`}>
                   <div className="sidebarInner">
                        <div className="sidebar_top flex items-center justify-between bg-primaryColor py-[24px] px-[20px] ">
                            <div className="sidebar_logo">
                                <Link to="/" className="text-white text-[25px] font-bold " >CMS</Link>
                            </div>
                            <div className="bar">
                                <div onClick={() => setSidebar(false)} className="bar_icon text-[22px] cursor-pointer text-white "><FontAwesomeIcon icon={faBars} /></div>
                            </div>
                        </div>
                        <div className="sidebar_menu text-white pb-[20px]">
                            <ul>
                                <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] px-[20px] py-[5px] " >
                                    <NavLink className="flex items-center">
                                        <FontAwesomeIcon icon={faGauge} />
                                        <span className="pl-[12px] py-[8px] w-full block">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="text-[17px] border-b border-1 border-[#021933] font-robotoFont hover:bg-[#051f3e] px-[20px] py-[5px] " >
                                    <NavLink className="flex items-center">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        <span className="pl-[12px] py-[8px] w-full block">Product</span> 
                                    </NavLink>
                                </li>
                                <li onClick={subMenuHandler} className={`text-[17px] font-robotoFont py-[5px] border-b border-1 border-[#021933] ${subMenu === false ? "hover:bg-[#051f3e]" : ''} `} >
                                    <NavLink className="flex justify-between items-center">
                                        <div className="m-left-item flex items-center px-[20px] ">
                                            <FontAwesomeIcon icon={faFaceSmile} />
                                            <span className="pl-[12px] py-[8px] w-full block">Demo Page</span>
                                        </div> 
                                        <div className="menu-icon pr-[12px] ">
                                            <FontAwesomeIcon className={` transition-all  duration-300 ${subMenu === true ? 'rotate-[90deg] ' : 'rotate-[0deg]'}`} icon={faChevronRight} /> 
                                        </div>
                                    </NavLink>
                                    <ul className={`w-full bg-[#051f3e] py-3 h-full ${subMenu === false ? "hidden": "" }`}>
                                        <li className="flex mb-1">
                                            <NavLink className=" hover:bg-[#042954] block w-full pl-[60px] py-[7px]">
                                                <FontAwesomeIcon className="text-[12px] mr-2" icon={faCircle} /> 
                                                <span className="text-[15px] font-robotoFont " >Demo One</span>
                                            </NavLink>
                                        </li>
                                        <li className="flex mb-1">
                                            <NavLink className=" hover:bg-[#042954] block w-full pl-[60px] py-[7px]">
                                                <FontAwesomeIcon className="text-[12px] mr-2" icon={faCircle} /> 
                                                <span className="text-[15px] font-robotoFont " >Demo One</span>
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
                    </div>
                </div>
                <div className={`main-body bg-[#F0F1F3] ${sidebar === true ? 'w-[85%]' : 'w-full'}`}>
                    <div className="topbar flex justify-between p-[22px] bg-white items-center shadow-topbar" ref={refOne}>
                        <div className="times_icon">
                            { sidebar === false ?  <button className="text-black text-[20px] " onClick={() => { setSidebar(true) }} ><FontAwesomeIcon icon={faTimes} /></button> : '' }
                        </div>
                        <div className="topbar_right flex items-center">  
                            <div className="message relative mt-3 cursor-pointer" onClick={messageHandler}>
                                <span className="absolute top-[-20px] right-[-14px] font-blod w-[30px] h-[30px] bg-[#2ad7c5] text-center text-white shadow-topbar rounded-full border-white border-[2px] " >6</span>
                                <FontAwesomeIcon className="text-[#7E7E7E] text-[20px]" icon={faEnvelope} /> 
                                <div className={`dropdown_menu shadow-topbar absolute right-0 w-[350px] top-[48px] bg-white ${message === false ? 'hidden' : ''}`}>
                                    <div className="dropdown_inner relative">
                                        <div className="dropdown_header bg-[#2ad7c5] py-[20px] px-[25px] text-center text-white text-[18px] after:content-[''] after:absolute after:bg-[#2ad7c5] after:right-[4px] after:top-[-9px] after:w-[20px] after:h-[20px] after:block after:rotate-[45deg] font-robotoFont  ">
                                            <span>05 Message</span>
                                        </div>
                                        <div className="dropdown_content p-[25px] pb-0">
                                            <Link>
                                                <div className="content_item pb-[20px]">
                                                    <div className="media flex ">
                                                        <div className="media_img pr-4">
                                                            <img className="rounded-full w-[60px]"  src={admin_img} alt="image" />
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="item-title flex items-center justify-between "> 
                                                                <span className="item-name font-semibold font-robotoFont ">Maria Zaman</span> 
                                                                <span className="item-time text-[#646464] font-robotoFont">18:30</span>  
                                                            </div>
                                                            <p className="text-[#646464] pt-1 font-robotoFont ">What is the reason of buy this item. 
                                                            Is it usefull for me.....</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className="content_item pb-[20px]">
                                                    <div className="media flex ">
                                                        <div className="media_img pr-4">
                                                            <img className="rounded-full w-[60px]"  src={admin_img} alt="image" />
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="item-title flex items-center justify-between "> 
                                                                <span className="item-name font-semibold font-robotoFont ">Benny Roy</span> 
                                                                <span className="item-time text-[#646464] font-robotoFont">18:30</span>  
                                                            </div>
                                                            <p className="text-[#646464] pt-1 font-robotoFont ">What is the reason of buy this item. 
                                                            Is it usefull for me.....</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                           <Link>
                                                <div className="content_item pb-[20px]">
                                                    <div className="media flex ">
                                                        <div className="media_img pr-4">
                                                            <img className="rounded-full w-[60px]"  src={admin_img} alt="image" />
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="item-title flex items-center justify-between "> 
                                                                <span className="item-name font-semibold font-robotoFont ">Steven</span> 
                                                                <span className="item-time text-[#646464] font-robotoFont">18:30</span>  
                                                            </div>
                                                            <p className="text-[#646464] pt-1 font-robotoFont ">What is the reason of buy this item. 
                                                            Is it usefull for me.....</p>
                                                        </div>
                                                    </div>
                                                </div>
                                           </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="notification relative mx-10 mt-3 cursor-pointer" onClick={notificationHandler}>
                                <span className="absolute top-[-20px] right-[-14px] font-blod w-[30px] h-[30px] bg-[#ff3131] text-center text-white shadow-topbar rounded-full border-white border-[2px] " >6</span>
                                <FontAwesomeIcon className="text-[#7E7E7E] text-[20px] " icon={faBell} /> 
                                <div className={`dropdown_menu shadow-topbar absolute right-0 w-[350px] top-[48px] bg-white ${notification === false ? 'hidden' : ''}`}>
                                    <div className="dropdown_inner relative">
                                        <div className="dropdown_header bg-[#ff3131] py-[20px] px-[25px] text-center text-white text-[18px] after:content-[''] after:absolute after:bg-[#ff3131] after:right-[4px] after:top-[-9px] after:w-[20px] after:h-[20px] after:block after:rotate-[45deg] font-robotoFont ">
                                            <span>05 Notifications</span>
                                        </div>
                                        <div className="dropdown_content p-[25px] pb-0">
                                            <Link>
                                                <div className="content_item pb-[20px]">
                                                    <div className="media flex ">
                                                        <div className="media_img w-[30px] h-[30px] bg-[#40dfcd] text-white rounded-full leading-[30px] inline-block  text-center ">
                                                             <FontAwesomeIcon className="text-[16px] " icon={faCheck} /> 
                                                        </div>
                                                        <div className="media-body ml-4">
                                                            <div className="item-title"> 
                                                                <span className="item-name font-semibold font-robotoFont ">Complete Today Task</span>  
                                                            </div>
                                                            <p className="text-[#646464] pt-[2px] text-[14px] font-robotoFont ">1 Mins ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link> 
                                            <Link>
                                                <div className="content_item pb-[20px]">
                                                    <div className="media flex ">
                                                        <div className="media_img w-[30px] h-[30px] bg-[#40dfcd] text-white rounded-full leading-[30px] inline-block  text-center ">
                                                             <FontAwesomeIcon className="text-[16px] " icon={faCheck} /> 
                                                        </div>
                                                        <div className="media-body ml-4">
                                                            <div className="item-title"> 
                                                                <span className="item-name font-semibold font-robotoFont ">Director Metting</span>  
                                                            </div>
                                                            <p className="text-[#646464] pt-[2px] text-[14px] font-robotoFont ">20 Mins ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link> 
                                            <Link>
                                                <div className="content_item pb-[20px]">
                                                    <div className="media flex ">
                                                        <div className="media_img w-[30px] h-[30px] bg-[#40dfcd] text-white rounded-full leading-[30px] inline-block  text-center ">
                                                             <FontAwesomeIcon className="text-[16px] " icon={faCheck} /> 
                                                        </div>
                                                        <div className="media-body ml-4">
                                                            <div className="item-title"> 
                                                                <span className="item-name font-semibold font-robotoFont ">Update Password</span>  
                                                            </div>
                                                            <p className="text-[#646464] pt-[2px] text-[14px] font-robotoFont ">45 Mins ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link> 
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="admin relative">
                                <div className="flex items-center cursor-pointer " onClick={adminHandler} >
                                    <div className="admin_title font-robotoFont text-end mr-4 ">
                                        <h5 className="font-bold text-[15px]" >Stevne Zone</h5>
                                        <p className="font-normal text-[14px] mt-[-2px]">Admin</p>
                                    </div>
                                    <div className="admin_image">
                                        <img className="w-[40px] h-[40px] rounded-full" src={admin_img} alt="" />
                                    </div>
                                </div>
                                <div className={`dropdown_menu shadow-topbar absolute right-0 w-[350px] top-[63px] bg-white ${admin === false ? 'hidden' : ''} `}>
                                    <div className="dropdown_inner relative">
                                        <div className="dropdown_header bg-primaryColor py-[20px] px-[25px] text-center text-white text-[18px] after:content-[''] after:absolute after:bg-primaryColor after:right-[4px] after:top-[-9px] after:w-[20px] after:h-[20px] after:block after:rotate-[45deg] font-robotoFont ">
                                            <span>Stevne Zone</span>
                                        </div>
                                        <div className="dropdown_content p-[25px] pb-0">
                                            <Link>
                                                <div className="content_item pb-[20px]">
                                                    <div className="media flex items-center"> 
                                                        <div className="media_img pr-4 ">
                                                            <FontAwesomeIcon icon={faUser} /> 
                                                        </div>
                                                        <div className="media-body"> 
                                                            <p className="text-[#646464] font-robotoFont">My Profile</p>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </Link> 
                                            <Link>
                                                <div className="content_item pb-[20px]">
                                                    <div className="media flex items-center "> 
                                                            <div className="media_img pr-4">
                                                                <FontAwesomeIcon icon={faReceipt} /> 
                                                            </div>
                                                            <div className="media-body"> 
                                                                <p className="text-[#646464] font-robotoFont ">Account Settings</p>
                                                            </div> 
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className="content_item pb-[20px]">
                                                    <div className="media flex items-center "> 
                                                            <div className="media_img pr-4">
                                                            <FontAwesomeIcon icon={faPowerOff} />
                                                            </div>
                                                            <div className="media-body"> 
                                                                <p className="text-[#646464] font-robotoFont ">Log Out</p>
                                                            </div> 
                                                    </div>
                                                </div>
                                            </Link>  
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="main-body-inner">
                        <h2>hello</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MasterLayout