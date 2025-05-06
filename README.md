💰 Loan Calculator App

A modern, responsive **Loan Calculator** built with **React.js** and **Material UI**. This app allows users to:

- Calculate EMI (Equated Monthly Installment)
- View an amortization schedule (month-wise breakdown)
- Convert EMI to multiple currencies using live exchange rates
- Toggle between Light and Dark modes

---

🔗 Live Demo

[Click here to view the live app](https://Ashik00011.github.io/LoanCalculator)

---

🚀 Features

✅ EMI calculation using standard formula  
✅ Dynamic amortization schedule  
✅ Real-time currency conversion (160+ currencies)  
✅ Dark/Light theme toggle  
✅ Responsive design (mobile-friendly)  
✅ Collapsible navigation for mobile  
✅ Custom hooks for cleaner code  
✅ Graceful error handling and 404 page

---

📐 EMI Formula Used
EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]

Where:

- `P` = Principal loan amount  
- `R` = Monthly interest rate (annual rate / 12 / 100)  
- `N` = Total number of months

---

🔧 Technologies Used

- React.js (Hooks, Routing, Context API)
- Material UI
- Axios
- ExchangeRate API
- React Router DOM

---

🗂️ Project Structure

src/
├── components/  UI components
├── context/  Global context (e.g., Theme, Currency)
├── hooks/  Custom hooks (useExchangeRates, etc.)
├── pages/  Route pages (Home, Error, 404)
├── utils/  Utility functions (EMI calculation)
└── App.js  App entry point


---

📦 Getting Started (Development)

```bash
git clone https://github.com/your-username/LoanCalculator.git
cd LoanCalculator
npm install
npm start

Then run:
npm install gh-pages --save-dev
npm run deploy

