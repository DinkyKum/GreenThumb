const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); 
const bodyParser=require("body-parser");
const connectDB = require("./config/db");


const plantRouter = require("./routes/plants");
const authRouter = require("./routes/auth");


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:1234', // Update with your frontend URL if different
  methods: ['GET', 'POST'], // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));


// Routes
app.use("/api/plants", plantRouter);
app.use("/", authRouter)


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


