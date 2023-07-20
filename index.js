require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.route");

/* VARIABLES */
const port = process.env.PORT || 4000;
const uri = process.env.MONGO_URI;

/* EXPRESS APP */
const app = express();

/* MIDDLEWARES */
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);
/* TEST APIs */
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to sparkle mart server" });
});

/* BYPASSED APIs */
app.use("/api/user", userRoutes);

/* DATA BASE (DB) */
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
