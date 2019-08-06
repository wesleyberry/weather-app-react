const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const apiRoute = require("./routes/api-routes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(apiRoute);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));