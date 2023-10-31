import mongoose, { mongo } from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/userDB");
app.use(cors());

app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
  password: String,
});
const userRoomFormSchema = new mongoose.Schema({
  username:String,
  street:String,
  city: String,
  state: String,
  pincode: Number,
  newstreet:String,
  newcity: String,
  newstate: String,
  newpincode: Number,
});

const User = mongoose.model("User", userSchema);
const Room = mongoose.model("Room", userRoomFormSchema);

app.post("/register", (req, res) => {
  const registrationData = req.body;

  console.log(registrationData);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });
  console.log(res.json);
  newUser
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Registration failed");
    });
});
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username })
    .exec()
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json(user);
        } else {
          res.status(401).send("login failed");
        }
      }
    });
});

app.post("/roomForm", (req, res) => {
  const userRoom = new Room({
    username:req.body.username,
    street:req.body.street,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    newstreet:req.body.newstreet,
    newcity: req.body.newcity,
    newstate: req.body.newstate,
    newpincode: req.body.newpincode,
  });

  userRoom
  .save()
  .then((user) => {
    res.json(user);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("An error occured please try again!!");
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
