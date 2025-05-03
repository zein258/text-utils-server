const express = require('express');
const app = express();

app.get('/wake', (req, res) => {
  res.send('Server is alive!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Keep-alive server running on port ${PORT}`);
});
