import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';

function Root() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: mode === 'light' ? '#2563eb' : '#93c5fd' },
      secondary: { main: mode === 'light' ? '#7c3aed' : '#c4b5fd' },
      background: {
        default: mode === 'light' ? '#eff6ff' : '#0f172a',
        paper: mode === 'light' ? '#ffffff' : '#1e293b'
      }
    },
    typography: { fontFamily: 'Inter, system-ui, sans-serif' },
    shape: { borderRadius: 14 }
  }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} onToggleTheme={() => setMode((current) => current === 'light' ? 'dark' : 'light')} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
