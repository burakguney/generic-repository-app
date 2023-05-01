const express = require('express');

const app = express();
app.use(express.json());

const wordRoutes = require("./src/routes/word");
app.use("/api/word", wordRoutes);

const port = 3000;
app.listen(port, () => console.log(`Langapp listening on port ${port}!`));