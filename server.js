const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.get('/v1', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'v1.min.html'));
});

app.get('/myth-as-charter', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'mac.html'));
});

app.get('/symptom-calendar', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'calendar.html'));
});

app.get('/page-not-found', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'notfound.min.html'));
});

app.get('/err', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'err.min.html'));
})

app.get('/*', (req, res) => {
  res.redirect('/page-not-found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
