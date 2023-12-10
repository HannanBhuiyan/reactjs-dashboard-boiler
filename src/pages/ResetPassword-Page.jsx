import React from "react";
import { Link } from "react-router-dom";
import reset_password_img from '../assets/images/reset_password.svg'


const ResetPassword = () => {

    return (
        <>
            <div className="register_page bg-[#F0F1F3] h-screen flex items-center ">
                <div className="container mx-auto">
                    <div className="register_page_inner">
                        <div className=" w-4/12 mx-auto bg-white p-8 shadow-[0 16px 49px -15px rgba(0,0,0,0.3)] rounded-lg  ">
                            <div className="mb-6">
                                <img src={reset_password_img} className="mb-3 mt-5" />
                                <h2 className="text-[45px] font-robotoFont font-medium text-[#253D4]">Set new password</h2>
                                <p className="text-[18px] font-robotoFont mt-1 ">Please create a new password that you don’t use on any other site.</p>
                            </div>
                            <form action="" >  
                                <div className="form_group mb-7">
                                    <label className="text-[17px] font-robotoFont" >Password<sup>*</sup></label>
                                    <input 
                                    className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2 " 
                                    type="text" 
                                    placeholder="Enter Password" 
                                    />
                                </div>
                                <div className="form_group">
                                    <label className="text-[17px] font-robotoFont" >Confirm Password <sup>*</sup></label>
                                    <input 
                                    className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                    type="password" 
                                    placeholder="Enter Confirm Password" />
                                </div>  
                                <div className="form_group text-center"> 
                                   <button 
                                   className="bg-[#042954] text-white px-[30px] inline rounded-lg text-[20px] py-[12px] hover:bg-primaryColor hover:-translate-y-2 transition-all duration-300 mb-3 mt-7" 
                                   type="submit" >Reset Password</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword