import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const ExchangeRates = ({ darkMode }) => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseCurrency = "USD";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/8c86f26822f79ef05978b007/latest/${baseCurrency}`);
        const data = await response.json();

        if (data && data.conversion_rates) {
          const rows = Object.entries(data.conversion_rates).map(([currency, rate], index) => ({
            id: index + 1,
            currency,
            rate: rate.toFixed(4),
          }));
          setRates(rows);
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const columns = [
    { field: "currency", headerName: "Currency", flex: 1 },
    { field: "rate", headerName: "Rate", flex: 1 },
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Live Exchange Rates (Base: {baseCurrency})
        </Typography>
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rates}
            columns={columns}
            loading={loading}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50, 100]}
            disableSelectionOnClick
          />
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default ExchangeRates;

