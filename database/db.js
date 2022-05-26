const mongoose = require("mongoose");

mongoose
    .connect(process.env.URI)
    .then(() => console.log("DB is connected 🚀"))
    .catch((e) => console.log("Error in connection: " + e));
