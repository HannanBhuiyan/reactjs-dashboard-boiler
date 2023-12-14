import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";


const MasterLayout = (props) => {

    const [sidebar, setSidebar] = useState(true)

    return(
        <>
            <div className="main_section flex " >
                <div className={`sidebar bg-[#042954] min-h-screen ${sidebar === true ? 'w-[15%]': 'w-0'}`}>
                   <div className="sidebarInner">
                        <div className="sidebar_top flex items-center justify-between bg-primaryColor py-[24px] px-[20px] ">
                            <div className="sidebar_logo">
                                <Link to="/" className="text-white text-[25px] font-bold " >sPOS</Link>
                            </div>
                            <div className="bar">
                                <div onClick={() => setSidebar(false)} className="bar_icon text-[22px] cursor-pointer text-white "><FontAwesomeIcon icon={faBars} /></div>
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
                <div className={`main-body bg-[#F0F1F3] ${sidebar === true ? 'w-[85%]' : 'w-full'}`}>
                    <TopBar sidebar={sidebar} setSidebar={setSidebar} />
                    <div className="main-body-inner">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MasterLayout