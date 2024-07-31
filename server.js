const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'account.html'));
  });

  app.use(express.json());

const users = [
  { email: 'email1@com.au', password: '123' },
  { email: 'email2@com.au', password: '456' },
  { email: 'email3@com.au', password: '789' }
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});


$(document).ready(function() {
    $('#login-form').on('submit', function(event) {
      event.preventDefault();
  
      var email = $('#email').val();
      var password = $('#password').val();
  
      $.post('/login', { email: email, password: password }, function(data) {
        if (data.valid) {
          window.location.href = '/account';
        } else {
          $('#errormsg').removeClass('hidemessage').addClass('showmessage');
        }
      });
    });
  });
  