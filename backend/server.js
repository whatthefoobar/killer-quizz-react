const express = require("express");
const admin = require("firebase-admin");

// Initialize Firebase admin SDK
const serviceAccount = require("./killer-questionnaire-firebase-adminsdk-34o9s-0ce0d44f37.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://killer-questionnaire-default-rtdb.europe-west1.firebasedatabase.app/",
});

const app = express();

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

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
