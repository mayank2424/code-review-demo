const express = require('express');
const app = express();

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username }, (err, user) => {
      if (err) {
        res.status(500).json({ error: 'Server error' });
      } else if (!user) {
        res.status(401).json({ error: 'Invalid credentials' });
      } else if (user.password !== password) {
        res.status(401).json({ error: 'Invalid credentials' });
      } else {
        res.status(200).json({ message: 'Login successful' });
      }
    });
  });
