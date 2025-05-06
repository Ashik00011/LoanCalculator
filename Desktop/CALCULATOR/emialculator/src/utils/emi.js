export function calculateEMI(P, r, years) {
    const monthlyRate = r / 12 / 100;
    const n = years * 12;
    return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  }
  
  export function buildAmortizationSchedule(P, r, years, emi) {
    const schedule = [];
    let balance = P;
    const monthlyRate = r / 12 / 100;
  
    for (let month = 1; month <= years * 12; month++) {
      const interest = balance * monthlyRate;
      const principal = emi - interest;
      balance -= principal;
      schedule.push({ month, principal, interest, balance: Math.max(balance, 0) });
    }
  
    return schedule;
  }
  