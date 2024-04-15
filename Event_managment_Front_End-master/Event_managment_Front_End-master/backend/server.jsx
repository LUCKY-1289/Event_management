
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const fs = require('fs');
app.use(cors());


const team_members = require("./team_memebers.json")

app.get('/team', (req, res) => {
  res.send(team_members)
})
//-------------------------------------------------------
app.post('/Register', (req, res) => {
  const { name, email, password } = req.body;

  // Read the existing team_members.json file
  fs.readFile('team_memebers.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading team_members.json:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    try {
      const members = JSON.parse(data);

      // Check if the email already exists
      const memberExists = members.some((member) => member.email === email);
      if (memberExists) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      // Add the new member to the array
      members.push({ fullname: name, email, password });

      // Write the updated members array to the team_members.json file
      fs.writeFile('team_memebers.json', JSON.stringify(members), (err) => {
        if (err) {
          console.error('Error writing to team_members.json:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }

        return res.status(200).json({ message: 'Registration successful' });
      });
    } catch (error) {
      console.error('Error parsing team_members.json:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
});

app.get('localhost:3000/register2', (req, res) => {
  const resp = res.body;
  console.log(resp);
})

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});