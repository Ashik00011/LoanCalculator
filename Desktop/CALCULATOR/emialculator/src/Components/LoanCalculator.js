import React, { useState} from 'react';
import useExchangeRates from '../hooks/useExchangeRates'; 
import { calculateEMI, buildAmortizationSchedule } from '../utils/emi'; 

export default function LoanCalculator() {
  const [P, setP] = useState(100000);
  const [annualRate, setAnnualRate] = useState(8.5);
  const [years, setYears] = useState(5);

  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);

  const [currency, setCurrency] = useState('USD');
  const { rates } = useExchangeRates('USD'); 
  const handleCalculate = () => {
    const emiValue = calculateEMI(+P, +annualRate, +years);
    setEmi(emiValue);
    setSchedule(buildAmortizationSchedule(+P, +annualRate, +years, emiValue));
  };

  const handleReset = () => {
    setEmi(null);
    setSchedule([]);
    setP(''); setAnnualRate(''); setYears('');
  };

  const conv = (amount) =>
    (amount * (rates[currency] || 1)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
<div className="px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto space-y-6">
      {!schedule.length && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 gap-y-4">
        <div>
            <label className="block font-medium mb-1">Loan Amount</label>
            <input 
              type="number"
              value={P}
              placeholder='like 100000'
              onChange={(e) => setP(e.target.value)}
              className=" bg-white text-black dark:bg-gray-900 dark:text-white w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Interest Rate (%)</label>
            <input
              type="number"
              step="0.01"
              value={annualRate}
              placeholder='like 8.5'
              onChange={(e) => setAnnualRate(e.target.value)}
              className="bg-white text-black dark:bg-gray-900 dark:text-white w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Term (Years)</label>
            <input
              type="number"
              value={years}
                placeholder='like 5'
              onChange={(e) => setYears(e.target.value)}
              className="bg-white text-black dark:bg-gray-900 dark:text-white w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="sm:col-span-3">
            <button
              onClick={handleCalculate}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              disabled={!P || !annualRate || !years}
            >
              Calculate
            </button>
          </div>
        </div>
      )}

      {schedule.length > 0 && (
        <div  className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          <h2 className="text-xl sm:text-2xl font-semibold break-words">
          Monthly EMI: {currency} {conv(emi)}
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <div>
                <label className="block text-sm">Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-white text-black dark:bg-gray-900 dark:text-white border rounded px-2 py-1"
                >
                  {Object.keys(rates).map((cur) => (
                    <option key={cur} value={cur}>
                      {cur}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleReset}
                className="border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-50 transition"
              >
                RESET TABLE
              </button>
            </div>
          </div>

          <div className="w-full border rounded shadow-sm overflow-x-auto text-sm bg-white text-black dark:bg-gray-900 dark:text-white" style={{ maxHeight: 400 }}>
          <table className="min-w-full table-auto">
          <thead className="sticky top-0 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
          <tr>
                  {['Month', 'Principal', 'Interest', 'Remaining Balance'].map((h) => (
                    <th key={h} className="px-4 py-2 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className= "bg-white text-black dark:bg-gray-900 dark:text-white  ">
                {schedule.map(({ month, principal, interest, balance }) => (
                  <tr  key={month} className="even:bg-gray-5 bg-white text-black dark:bg-gray-900 dark:text-white ">
                    <td className= "bg-white text-black dark:bg-gray-900 dark:text-white px-4 py-2">{month}</td>
                    <td className="px-4 py-2 bg-white text-black dark:bg-gray-900 dark:text-white">
                      {conv(principal)} {currency}
                    </td>
                    <td className="px-4 py-2 bg-white text-black dark:bg-gray-900 dark:text-white">
                      {conv(interest)} {currency}
                    </td>
                    <td className="px-4 py-2 bg-white text-black dark:bg-gray-900 dark:text-white ">
                      {conv(balance)} {currency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
);
}
