import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <div className="login_page max-lg:p-[30px] bg-[#F0F1F3]  max-lg:h-full h-screen flex items-center ">
                <div className="container mx-auto">
                    <div className="login_page_inner">
                        <div className=" xl:w-4/12 md:w-6/12 w-full max- mx-auto bg-white p-8 shadow-[0 16px 49px -15px rgba(0,0,0,0.3)] rounded-lg  ">
                            <div className="mb-10">
                                <h2 className="text-[45px] font-robotoFont font-medium text-[#253D4E] " >Login</h2>
                                <p className="text-[18px] font-robotoFont mt-1 ">Don't have an account? <Link to="/register" className=" text-primaryColor " >Create here</Link> </p>
                            </div>
                            <form action="" >
                                <div className="form_group mb-7">
                                    <label className="text-[17px] font-robotoFont" >Username/Email <sup>*</sup></label>
                                    <input 
                                    className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2 " 
                                    type="text" 
                                    placeholder="Enter Username/Email" 
                                    />
                                </div>
                                <div className="form_group">
                                    <label className="text-[17px] font-robotoFont" >Password <sup>*</sup></label>
                                    <input 
                                    className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                    type="password" 
                                    placeholder="Enter Password" />
                                </div>
                                <div className=" max-sm:flex-wrap flex justify-between items-center my-[50px] ">
                                    <div>
                                        <label className="cursor-pointer hover:text-primaryColor transition-all duration-300 " >
                                            <input type="checkbox" />
                                            <span className="text-[17px] ml-2 font-robotoFont" >Remember me</span>
                                        </label>
                                    </div>
                                    <div className="max-sm:mt-3">
                                        <Link to="/forget-password" className="text-[17px] font-robotoFont hover:text-primaryColor duration-300 transition-all " >Forgot password?</Link>
                                    </div>
                                </div>
                                <div className="form_group text-center"> 
                                   <button 
                                   className="bg-[#042954] text-white px-[30px] inline rounded-lg text-[20px] py-[12px] hover:bg-primaryColor hover:-translate-y-2 transition-all duration-300 mb-4" 
                                   type="submit" >Log in</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage