const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  
  app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'account.html'));
  });

  app.use(express.json());

const users = [
  { email: 'email1@com.au', password: '123' },
  { email: 'email2@com.au', password: '456' },
  { email: 'email3@com.au', password: '789' }
];

app.post('/login', (req, res) => {
    console.log("IN API ENDPOINT")
  const { email, password } = req.body;
  console.log("Email: ", email)
  console.log("Password", password)
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    console.log("User found")
    res.json({ valid: true });
  } else {
    console.log("User NOT found")
    res.json({ valid: false });
  }
});
