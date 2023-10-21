import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/userDB');
app.use(cors());

app.use(bodyParser.json()); 

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', (req, res) => {
  const registrationData=req.body

  console.log(registrationData)
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });

  newUser.save()
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Registration failed');
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
