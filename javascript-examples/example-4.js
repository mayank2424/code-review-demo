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


  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

class AuthController {
    constructor() {}

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            if (!user || !this.isPasswordValid(password, user.password)) {
              return res.status(401).json({ error: 'User not found or Invalid credentials!' });
            }

            res.status(200).json({ message: 'Login successful' });

        } catch(error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Server error' });
        }
    }

    isPasswordValid(inputPassword, userPassword) {
        return bcrypt.compare(inputPassword, userPassword);
    }
        
}

app.post('/login', AuthController.login);
