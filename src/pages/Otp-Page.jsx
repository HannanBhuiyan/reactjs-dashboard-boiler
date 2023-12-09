import React from "react";
import { Link } from "react-router-dom";

const OtpPage = () => {

    return (
        <>
            <div className="forget_password bg-[#F0F1F3] h-screen flex items-center ">
                <div className="container mx-auto">
                    <div className="forget_password_inner">
                        <div className=" w-4/12 mx-auto bg-white p-8 shadow-[0 16px 49px -15px rgba(0,0,0,0.3)] rounded-lg  ">
                            <div className="mb-6 text-center ">
                                <h2 className="text-[40px] font-robotoFont font-medium text-[#253D4] " >Set Your OTP?</h2>
                            </div>
                            <form action="" > 
                                <div className="form_group mb-7"> 
                                    <div className="flex items-center justify-center ">
                                        <input type="text" className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] " />
                                        <input type="text" className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] " />
                                        <input type="text" className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] " />
                                        <input type="text" className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] " />
                                        <input type="text" className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] " />
                                        <input type="text" className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] " /> 
                                    </div>
                                </div>
                                  
                                <div className="form_group text-center"> 
                                   <button 
                                   className="bg-[#042954] text-white px-[30px] inline rounded-lg text-[20px] py-[12px] hover:bg-primaryColor hover:-translate-y-2 transition-all duration-300 mb-4 mt-2" 
                                   type="submit" >Verify OTP</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpPage