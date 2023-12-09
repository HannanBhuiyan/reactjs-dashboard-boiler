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



const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} /> 
          <Route path="/product" element={<ProductPage />} /> 
          <Route path="/demo" element={<DemoPage />} /> 
          <Route path="/demo-two" element={<DemoTwo />} /> 
          <Route path="/invoice" element={<InvoicePage />} /> 
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/notification/:notificationName" element={<NotificationPage />} /> 
          <Route path="/message" element={<MessagePage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App