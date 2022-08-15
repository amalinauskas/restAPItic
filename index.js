const express = require("express");
const moves = require("./Moves");
const cors = require("cors");

const logger = require("./middleware/logger");
const app = express();

app.use(logger);

app.use(express.json());
app.use(cors());

app.use("/api/moves", require("./routes/api/moves"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server on: ${PORT}`));
