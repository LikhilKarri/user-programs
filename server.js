const express = require('express');

const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.post('/login', (req, res) => {

  const { username, password } = req.body;

  // demo login
  if (username === 'admin' && password === '1234') {

    res.json({
      message: 'Login Successful ✅'
    });

  } else {

    res.json({
      message: 'Invalid Username or Password ❌'
    });

  }

});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});