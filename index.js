const express = require('express');
const app = express();

app.get('/health/live', (req, res) => res.status(200).send('I am alive'));
app.get('/health/ready', (req, res) => res.status(200).send('I am ready'));
app.get('/health/startup', (req, res) => res.status(200).send('Startup complete'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
