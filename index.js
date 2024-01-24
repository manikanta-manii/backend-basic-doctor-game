const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const users = [
  {
    user: "mani",
    kidneys: [
      {
        isHealty: true,
      },
      {
        isHealty: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  let totalKidneys = users[0].kidneys.length;
  let healtyKidneys = 0;
  let unhealtyKidneys = 0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].isHealty) {
      healtyKidneys = healtyKidneys + 1;
    }
  }
  unhealtyKidneys = totalKidneys - healtyKidneys;
  res.json({
    totalKidneys,
    healtyKidneys,
    unhealtyKidneys,
  });
});

app.post("/", (req, res) => {
  const newKidney = req.body.msg;
  if (newKidney) {
    users[0].kidneys.push({
      isHealty: true,
    });
  } else {
    users[0].kidneys.push({
      isHealty: false,
    });
  }
  res.json({
    Kidney: "inserted",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].isHealty = true;
  }
  res.send("All the unhealty kidneys are replaced with healty");
});

app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].isHealty) {
      newKidneys.push({
        isHealty: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.status(200).json({
    msg: "delete done",
  });
});

app.listen(port, () => {
  console.log("Listening !");
});

//GET POST PUT DELETE
