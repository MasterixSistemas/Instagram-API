const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/status", (req, res) => {
  res.status(200).json({ status: "on", message: "Hello World!" });
});

app.listen(port, () =>
  console.log(`App listening on http://localhost:${port}`)
);
