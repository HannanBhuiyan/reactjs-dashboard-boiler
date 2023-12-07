import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MasterLayout from "./components/masterLayout/MasterLayout";



const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App