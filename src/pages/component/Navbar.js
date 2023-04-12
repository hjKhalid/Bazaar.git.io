import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/';
import SearchIcon from './SearchIcon'
import styles from '@/styles/Home.module.css'
import NextLink from 'next/link';
import Link from '@mui/material/Link'

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
      <div className={styles.SearchIcon}><SearchIcon />
      </div>
      <div className={styles.navigationLink}>
        <div>
          <Typography>
            <NextLink href='/cart'>Add to cart</NextLink>
          </Typography>
        </div>
        <div>
          <Typography>
            <NextLink href='/login'>Login</NextLink>
          </Typography>
        </div>
      </div>
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

export default function EnableColorOnDarkAppBar(props) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>

        <AppBar position="sticky" color="primary">
          {appBarLabel(`${props.HeadingName}`)}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}