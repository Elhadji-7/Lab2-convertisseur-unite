import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';

const theme = createTheme({
  palette: { mode: 'light', primary: { main: '#2563eb' }, secondary: { main: '#7c3aed' } },
  typography: { fontFamily: 'Inter, system-ui, sans-serif' },
  shape: { borderRadius: 14 }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
