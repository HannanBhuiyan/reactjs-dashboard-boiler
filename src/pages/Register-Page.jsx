import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {

    return (
        <>
            <div className="register_page bg-[#F0F1F3] h-screen flex items-center ">
                <div className="container mx-auto">
                    <div className="register_page_inner">
                        <div className=" w-4/12 mx-auto bg-white p-8 shadow-[0 16px 49px -15px rgba(0,0,0,0.3)] rounded-lg  ">
                            <div className="mb-10">
                                <h2 className="text-[45px] font-robotoFont font-medium text-[#253D4] " >Create an Account</h2>
                                <p className="text-[18px] font-robotoFont mt-1 ">Already have an account? <Link to="/login" className=" text-primaryColor">Login</Link> </p>
                            </div>
                            <form action="" >
                                <div className="form_group mb-7">
                                    <label className="text-[17px] font-robotoFont" >Username<sup>*</sup></label>
                                    <input 
                                    className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2 " 
                                    type="text" 
                                    placeholder="Enter Username" 
                                    />
                                </div> 
                                <div className="form_group mb-7">
                                    <label className="text-[17px] font-robotoFont" >Email<sup>*</sup></label>
                                    <input 
                                    className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2 " 
                                    type="text" 
                                    placeholder="Enter Email" 
                                    />
                                </div>
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
                                
                                <div className="flex justify-between items-center mt-[30px] mb-[40px] ">
                                    <div>
                                        <label className="cursor-pointer hover:text-primaryColor transition-all duration-300 " >
                                            <input type="checkbox" />
                                            <span className="text-[17px] ml-2 font-robotoFont" >I agree to terms & Policy.</span>
                                        </label>
                                    </div> 
                                </div>
                                <div className="form_group text-center"> 
                                   <button 
                                   className="bg-[#042954] text-white px-[30px] inline rounded-lg text-[20px] py-[12px] hover:bg-primaryColor hover:-translate-y-2 transition-all duration-300 mb-4" 
                                   type="submit" >Submit & Register</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage