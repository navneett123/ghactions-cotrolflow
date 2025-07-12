const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const feedbackPath = path.join(__dirname, '../feedback.json');

app.post('/submit', (req, res) => {
  const { message } = req.body;
  if (!message || message.length < 10) {
    return res.status(400).send({ error: "Too short" });
  }

  const feedbacks = JSON.parse(fs.readFileSync(feedbackPath));
  feedbacks.push({ message, submitted_at: new Date().toISOString() });
  fs.writeFileSync(feedbackPath, JSON.stringify(feedbacks, null, 2));
  res.send({ status: "ok" });
});

app.get('/feedback.json', (req, res) => {
  res.sendFile(feedbackPath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
