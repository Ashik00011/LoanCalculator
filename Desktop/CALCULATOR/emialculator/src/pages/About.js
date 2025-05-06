// src/pages/About.jsx (or src/components/About.jsx)
import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p className="mb-4">
        This Loan Calculator App is a modern, single-page web application built using React JS and Material UI. 
        It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, 
        and see real-time currency conversions of their EMI using live exchange rates.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Loan EMI calculation using standard financial formulas</li>
        <li>Dynamic amortization schedule with monthly breakdown</li>
        <li>Real-time currency conversion using live ExchangeRate API</li>
        <li>Paginated exchange rate table for 160+ currencies</li>
        <li>Dark/Light mode toggle</li>
        <li>Responsive UI using Material UI</li>
        <li>Collapsible mobile navigation</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Technologies Used</h2>
      <ul className="list-disc list-inside mb-4">
        <li>React (Hooks, Routing, Context API)</li>
        <li>Material UI</li>
        <li>Axios</li>
        <li>Exchange Rate API</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">EMI Formula</h2>
      <p className="mb-4">
        EMI = [P × R × (1 + R)<sup>N</sup>] / [(1 + R)<sup>N</sup> – 1]<br />
        Where:
        <ul className="list-disc list-inside mt-2">
          <li><b>P</b> = Principal loan amount</li>
          <li><b>R</b> = Monthly interest rate (annual rate / 12 / 100)</li>
          <li><b>N</b> = Loan duration in months</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Live Demo</h2>
      <p className="mb-4">
        You can view the live deployed app at: <a href="https://Ashik00011.github.io/LoanCalculator" className="text-blue-500 underline" target="_blank" rel="noreferrer">your-live-url.com</a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">GitHub Repository</h2>
      <p className="mb-4">
        Visit the GitHub repository for source code: <a href="https://github.com/Ashik00011/LoanCalculator/tree/main/Desktop/CALCULATOR/emialculator" className="text-blue-500 underline" target="_blank" rel="noreferrer">GitHub Repo</a>
      </p>
    </div>
  );
};

export default About;
