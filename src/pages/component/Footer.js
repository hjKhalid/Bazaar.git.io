import React from 'react'
import AppBar from '@mui/material/AppBar';
import  Toolbar from '@mui/material/Toolbar';
import  Typography  from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function appBarLabel(label) {
    return (
      <Toolbar>
        
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#c2c2c2',
      },
    },
  });

export default function Footer ()  {
  return (
    <div>
        <ThemeProvider theme={darkTheme}>
         <AppBar position="static" color="primary" enableColorOnDark>
         <div style={{textAlign:"center"}}>{appBarLabel('@Copyright2023 bazaar')}</div> 
        </AppBar>
        </ThemeProvider>
    </div>
  )
}
