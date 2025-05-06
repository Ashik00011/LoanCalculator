import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useExchangeRates(base = 'USD') {
  const [rates, setRates] = useState({ [base]: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/8c86f26822f79ef05978b007/latest/${base}`)
      .then((res) => {
        setRates(res.data.conversion_rates);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }, [base]);

  return { rates, loading, error };
}
