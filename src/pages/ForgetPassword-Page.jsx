import React from "react";
import { Link } from "react-router-dom";
import forgot_password from '../assets/images/forgot_password.svg'

const ForgetPassword = () => {

    return (
        <>
            <div className="forget_password bg-[#F0F1F3] max-lg:p-[30px]  h-screen flex items-center ">
                <div className="container mx-auto">
                    <div className="forget_password_inner">
                        <div className=" xl:w-4/12 md:w-6/12 w-full mx-auto bg-white p-8 shadow-[0 16px 49px -15px rgba(0,0,0,0.3)] rounded-lg  ">
                            <div className="mb-6">
                                <img src={forgot_password} alt="" className="my-[20px]" />
                                <h2 className="text-[40px] max-lg:text-[30px] max-sm:text-[22px]  font-robotoFont font-medium text-[#253D4] " >Forgot your password?</h2>
                                <p className="text-[17px] font-robotoFont mt-1 "> Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.</p>
                            </div>
                            <form action="" > 
                                <div className="form_group mb-7">
                                    <label className="text-[17px] font-robotoFont" >Email<sup>*</sup></label>
                                    <input 
                                    className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2 " 
                                    type="text" 
                                    placeholder="Enter Email" 
                                    />
                                </div>
                                  
                                <div className="form_group text-center"> 
                                   <button 
                                   className="bg-[#042954] text-white px-[30px] inline rounded-lg text-[20px] py-[12px] hover:bg-primaryColor hover:-translate-y-2 transition-all duration-300 mb-4 mt-2" 
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

export default ForgetPassword