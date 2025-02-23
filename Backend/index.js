const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser=require("body-parser");
const connectDB = require("./config/db");
const plantRoutes = require("./routes/plants");


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


// // Routes
app.use("/api/plants", plantRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


