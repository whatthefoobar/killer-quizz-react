const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
require("dotenv").config();
// const { v4: uuidv4 } = require("uuid");

// Initialize Firebase admin SDK
const serviceAccount = require("./killer-questionnaire-firebase-adminsdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://killer-questionnaire-frontend.onrender.com",
      //when deployed
    ],
  })
);

// Body parsing middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Your API is up and running");
});

// this gets my questionnaire qa data
app.get("/data", (req, res) => {
  const database = admin.database();
  const ref = database.ref("/questions");

  ref.once(
    "value",
    (snapshot) => {
      const data = snapshot.val();
      res.json(data);
    },
    (error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data from Firebase" });
    }
  );
});

app.get("/result-categories", (req, res) => {
  const database = admin.database();
  const ref = database.ref("/result-categories");

  ref.once(
    "value",
    (snapshot) => {
      const data = snapshot.val();
      res.json(data);
    },
    (error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data from Firebase" });
    }
  );
});

app.post("/scores", (req, res) => {
  const data = req.body;

  // Push the data to Firebase Realtime Database
  const ref = admin.database().ref("/scores");
  ref.push(data);

  res.sendStatus(200);
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
