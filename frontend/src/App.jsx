import { useEffect, useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import StraightenIcon from '@mui/icons-material/Straighten';
import {
  Alert, Box, CircularProgress, Container, IconButton, InputAdornment,
  MenuItem, Paper, Stack, TextField, Tooltip, Typography
} from '@mui/material';

const formatResult = (number) => new Intl.NumberFormat('fr-FR', {
  maximumFractionDigits: 8
}).format(number);

export default function App({ mode, onToggleTheme }) {
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState('length');
  const [from, setFrom] = useState('foot');
  const [to, setTo] = useState('meter');
  const [value, setValue] = useState('1');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/conversions')
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then(setCategories)
      .catch(() => setError("Impossible de joindre l'API. Vérifiez que le backend est démarré."));
  }, []);

  useEffect(() => {
    if (!categories || value === '' || Number.isNaN(Number(value))) {
      setResult(null);
      return;
    }
    const controller = new AbortController();
    fetch('/api/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({ category, from, to, value })
    })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => { setResult(data.result); setError(''); })
      .catch((err) => { if (err.name !== 'AbortError') setError('Conversion indisponible.'); });
    return () => controller.abort();
  }, [categories, category, from, to, value]);

  if (!categories) {
    return <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}><CircularProgress /></Box>;
  }

  const units = categories[category].units;
  const selectUnit = (label, selected, onChange) => (
    <TextField select fullWidth label={label} value={selected} onChange={(event) => onChange(event.target.value)}>
      {Object.entries(units).map(([key, unit]) => <MenuItem key={key} value={key}>{unit.label} ({unit.symbol})</MenuItem>)}
    </TextField>
  );

  const switchUnits = () => { setFrom(to); setTo(from); };

  return (
    <Box sx={(theme) => ({
      minHeight: '100vh', py: { xs: 5, sm: 10 },
      background: theme.palette.mode === 'light'
        ? 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)'
        : 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)'
    })}>
      <Container maxWidth="sm">
        <Stack spacing={3}>
          <Box textAlign="center" position="relative">
            <Tooltip title={mode === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}>
              <IconButton
                aria-label={mode === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
                onClick={onToggleTheme}
                sx={{ position: 'absolute', right: 0, top: 0 }}
              >
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Tooltip>
            <StraightenIcon color="primary" sx={{ fontSize: 42 }} />
            <Typography variant="h3" component="h1" fontWeight={800}>Convertisseur</Typography>
            <Typography color="text.secondary">Convertissez vos unités instantanément.</Typography>
          </Box>
          <Paper elevation={4} sx={{ p: { xs: 2.5, sm: 4 } }}>
            <Stack spacing={3}>
              <TextField select fullWidth label="Type de conversion" value={category} onChange={(event) => {
                const next = event.target.value;
                const keys = Object.keys(categories[next].units);
                setCategory(next); setFrom(keys[0]); setTo(keys[1] || keys[0]);
              }}>
                {Object.entries(categories).map(([key, item]) => <MenuItem key={key} value={key}>{item.label}</MenuItem>)}
              </TextField>
              <TextField fullWidth type="number" label="Valeur à convertir" value={value} onChange={(event) => setValue(event.target.value)} inputProps={{ step: 'any' }} InputProps={{ endAdornment: <InputAdornment position="end">{units[from].symbol}</InputAdornment> }} />
              {selectUnit('De', from, setFrom)}
              <Box sx={{ display: 'flex', justifyContent: 'center', my: -1 }}><IconButton color="primary" onClick={switchUnits} aria-label="Inverser les unités"><SwapHorizIcon /></IconButton></Box>
              {selectUnit('Vers', to, setTo)}
              <Paper variant="outlined" sx={(theme) => ({ p: 2.5, bgcolor: theme.palette.action.hover, textAlign: 'center' })}>
                <Typography variant="body2" color="text.secondary">Résultat</Typography>
                <Typography variant="h4" color="primary" fontWeight={700} aria-live="polite">
                  {result === null ? '—' : `${formatResult(result)} ${units[to].symbol}`}
                </Typography>
              </Paper>
              {error && <Alert severity="error">{error}</Alert>}
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
