const express = require('express');
const app = express();
app.use(express.json());

app.post('/splitText', (req, res) => {
  const { text, delimiter } = req.body;
  if (!text || !delimiter) return res.status(400).send('Missing text or delimiter.');
  const words = text.split(delimiter);
  res.json({ result: words });
});

app.post('/validateText', (req, res) => {
  const { text, check } = req.body;
  if (text === undefined || check === undefined) return res.status(400).send('Missing text or check value.');
  const isValid = text === check;
  res.json({ valid: isValid });
});

app.post('/formatUID', (req, res) => {
  const { uid } = req.body;
  if (!uid || uid.length !== 16) return res.status(400).send('UID must be 16 characters.');
  const formatted = `SW2-${uid.slice(0,3)}-${uid.slice(3,7)}-${uid.slice(7,11)}-${uid.slice(11,15)}`;
  res.json({ result: formatted });
});

app.post('/formatName', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send('Missing name.');
  const parts = name.split(' ');
  const formatted = parts.map((part, index) => {
    if (index === 0) return part.slice(0, 2).toUpperCase() + '***';
    return part[0].toUpperCase() + '.';
  }).join(' ');
  res.json({ result: formatted });
});

app.post('/formatInteger', (req, res) => {
  const { integer } = req.body;
  if (integer === undefined) return res.status(400).send('Missing integer.');
  const formatted = parseFloat(integer).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  res.json({ result: formatted });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
