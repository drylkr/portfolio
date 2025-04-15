import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import { indigo, grey } from '@mui/material/colors';

const createAppTheme = (mode) => {
  return createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h2: {
          fontSize: '40px',
          fontWeight: 500,
        },
        h4: {
          fontSize: "2rem", 
          [`@media (max-width:600px)`]: {
            fontSize: "1.5rem", 
          },
        },
        body1: {
            fontSize: '20px',
            [`@media (max-width:600px)`]: {
              fontSize: "1rem", 
            },
          },
      },
      
    palette: {
      mode,
      primary: {
        main: indigo['A700'],
        light: '#e8eaf6'
      },
      ...(mode === 'dark' && {
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#fff',
          secondary: grey[400],
        },
      }),
    },
  });
};

export default createAppTheme;