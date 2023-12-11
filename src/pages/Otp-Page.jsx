import React, { useRef } from "react";
import { Link } from "react-router-dom";

const OtpPage = () => {


    let refOne, refTwo, refThree, refFour, refFive, refSix = useRef()
   

    const otpVerifySubmitHandler = (e) => {
        e.preventDefault()

        let inputOne = refOne.value
        let inputTwo = refTwo.value
        let inputThree = refThree.value
        let inputFour = refFour.value
        let inputFive = refFive.value
        let inputSix = refSix.value
        
        let otp = inputOne + inputTwo + inputThree + inputFour + inputFive + inputSix
        console.log(otp)
        
    }


    return (
        <>
            <div className="forget_password max-lg:p-[30px] bg-[#F0F1F3] h-screen flex items-center ">
                <div className="container mx-auto">
                    <div className="forget_password_inner">
                        <div className=" xl:w-4/12 md:w-6/12 w-full mx-auto bg-white p-8 shadow-[0 16px 49px -15px rgba(0,0,0,0.3)] rounded-lg  ">
                            <div className="mb-6 text-center ">
                                <h2 className="text-[40px] font-robotoFont font-medium text-[#253D4] max-lg:text-[30px] max-sm:text-[25px]" >Set Your OTP?</h2>
                            </div>
                            <form onSubmit={otpVerifySubmitHandler} > 
                                <div className="form_group mb-7"> 
                                    <div className=" max-sm:flex-wrap flex items-center justify-center ">
                                        <input 
                                        type="text" 
                                        ref={(input) => refOne=input}
                                        className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] max-sm:mb-3 " />
                                        <input 
                                        type="text"
                                        ref={(input) => refTwo=input} 
                                        className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] max-sm:mb-3 " />
                                        <input 
                                        type="text" 
                                        ref={(input) => refThree=input}
                                        className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] max-sm:mb-3 " />
                                        <input 
                                        type="text" 
                                        ref={(input) => refFour=input}
                                        className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] max-sm:mb-3 " />
                                        <input 
                                        type="text"
                                        ref={(input) => refFive=input}
                                        className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] max-sm:mb-3 " />
                                        <input 
                                        type="text" 
                                        ref={(input) => refSix=input}
                                        className="w-[45px] focus:outline-none focus:border-primaryColor text-center font-robotoFont text-[22px] font-medium h-[45px] rounded-md border-2 mr-3 border-[#04295425] max-sm:mb-3 " /> 
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