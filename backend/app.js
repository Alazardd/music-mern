
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const songRoutes = require("./routes/songs");
const statRoutes = require("./routes/statistics");

const app = express();
app.use(cors());
app.use(express.json());

require("dotenv").config();

// Replace this connection string with your MongoDB Atlas connection string.
// Make sure to replace  and  with your actual username and password.
const MONGO_URI =
  "mongodb+srv://alazar:ssuiqYGgCNAZbx2w@cluster0.vgbq0db.mongodb.net/addis-software-test?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/songs", songRoutes);
app.use("/api/statistics", statRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
