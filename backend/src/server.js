import cors from 'cors';
import express from 'express';
import { conversionCategories, convert, getLengthFunFact } from './conversions.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.get('/api/conversions', (_req, res) => {
  res.json(conversionCategories);
});

app.post('/api/convert', (req, res) => {
  const { category, from, to, value } = req.body;
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return res.status(400).json({ error: 'La valeur doit être un nombre valide.' });
  }

  const result = convert({ category, from, to, value: numericValue });
  if (result === null) {
    return res.status(400).json({ error: 'Conversion non prise en charge.' });
  }

  const funFact = category === 'length'
    ? getLengthFunFact(numericValue * conversionCategories.length.units[from].factor)
    : null;

  return res.json({ category, from, to, value: numericValue, result, funFact });
});

app.listen(port, () => console.log(`API disponible sur http://localhost:${port}`));
