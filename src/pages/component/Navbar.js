import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/';
import SearchIcon from './SearchIcon'

import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="#818181" aria-label="menu" sx={{ mr: 2 }}>
        {/* <MenuIcon /> */}
      </IconButton>
      <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <div><SearchIcon/></div>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#818181',
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
       
        <AppBar position="sticky" color="primary">
          {appBarLabel('Bazaar')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}