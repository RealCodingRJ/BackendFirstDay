import express from "express";
import sendInfo from "../SendInfo/SendInfo";
import stringLog from "../SendInfo/Message";
import isHomeRoute from "../SendInfo/URL";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  if (isHomeRoute(req.url)) {
    console.log("Visited...");
  } else if (req.url != isHomeRoute(req.url)) {
    console.log("Not Home Page");
  }

  res.send(sendInfo());
});

app.listen(PORT, () => {
  console.log(stringLog(PORT));
});
