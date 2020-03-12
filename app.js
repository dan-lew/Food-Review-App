const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const index = require("./routes/index");
const fileupload = require("express-fileupload");
const uuid = require("uuidv4");

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect to MongoDB database
connectDB();

// Initialize Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(fileupload());

app.get("/", (req, res) => {
  res.json({ msg: "welcome to food review app api " });
});

// Define Routes
app.use("/api/index", require("./routes/index"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/sendMessage", require("./routes/sendMessage"));
// app.use("/api/register", require("./routes/register"));
// app.use("/api/login", require("./routes/login"));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () =>
  console.log(`Server Started on port ${PORT} `.magenta.underline.bold)
);
