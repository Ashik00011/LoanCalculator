import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About This Project
      </Typography>
      <Typography variant="body1" paragraph>
        The Live Exchange Rates project is a React-based web application designed to provide users with up-to-date currency exchange rates in a clear and interactive format. The data is sourced from the reliable and real-time ExchangeRate-API.
      </Typography>
      <Typography variant="body1" paragraph>
        Built using modern web technologies such as React and Material UI, the application offers a smooth user experience with features like sortable tables, pagination, and responsive design.
      </Typography>
      <Typography variant="body1" paragraph>
        This project was developed as part of a learning journey in frontend development, focusing on API integration, data visualization, and clean UI/UX practices.
      </Typography>
    </Box>
  );
};

export default About;
