import React from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const DashboardPage = () => {
    return(
        <>
            <MasterLayout>
               <div className="breadcrumbs-area p-[30px]">
                    <h2 className="text-[30px] font-robotoFont font-medium text-[#111111] ">Dashboard</h2>
                    <ul className="flex items-center">
                        <li className=" font-robotoFont text-[17px] " >Home</li>
                        <li className=" font-robotoFont text-[13px] px-[6px]" >
                            <FontAwesomeIcon icon={faChevronRight} /> 
                        </li>
                        <li className="font-robotoFont text-[17px] text-primaryColor " >Dashbard</li>
                    </ul>
               </div>
            </MasterLayout>
        </>
    )
}

export default DashboardPage;