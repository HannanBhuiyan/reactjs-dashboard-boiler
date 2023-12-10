import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MasterLayout from "./components/masterLayout/MasterLayout";
import ProductPage from "./pages/Product-Page";
import DashboardPage from "./pages/Dashboard-Page";
import DemoPage from "./pages/Demo-Page";
import DemoTwo from "./pages/DemoTwo";
import InvoicePage from "./pages/Invoice-Page";
import ProfilePage from "./pages/Profile-Page";
import NotificationPage from "./pages/Notification-Page";
import MessagePage from "./pages/Message-Page";
import LoginPage from "./pages/Login-Page";
import RegisterPage from "./pages/Register-Page";
import ForgetPassword from "./pages/ForgetPassword-Page";
import OtpPage from "./pages/Otp-Page";
import ResetPassword from "./pages/ResetPassword-Page";
import FullScreenLoader from "./components/masterLayout/FullScreenLoader";



const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/dashboard" element={<DashboardPage />} /> 
          <Route path="/product" element={<ProductPage />} /> 
          <Route path="/demo" element={<DemoPage />} /> 
          <Route path="/demo-two" element={<DemoTwo />} /> 
          <Route path="/invoice" element={<InvoicePage />} /> 
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/forget-password" element={<ForgetPassword />} /> 
          <Route path="/verify-otp" element={<OtpPage />} /> 
          <Route path="/reset-password" element={<ResetPassword />} /> 
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/notification/:notificationName" element={<NotificationPage />} /> 
          <Route path="/message" element={<MessagePage />} /> 
        </Routes>
      </BrowserRouter>
      {/* <FullScreenLoader />  */}
    </>
  )
}

export default App