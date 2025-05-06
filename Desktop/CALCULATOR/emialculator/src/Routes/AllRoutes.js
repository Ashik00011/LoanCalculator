import {Routes,Route} from "react-router-dom";
import  LoanCalculator  from "../Components/LoanCalculator";
import  ExchangeRates  from "../Components/ExchangeRates";
import ErrorPage from "../Components/ErrorPage";
import About from "../pages/About";
import { useState } from "react";
import { useEffect } from "react";



export const AllRoutes = ({ darkMode }) => {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Routes>
        <Route path="/" element={<LoanCalculator />} />
        <Route path="/exchange" element={<ExchangeRates darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};
