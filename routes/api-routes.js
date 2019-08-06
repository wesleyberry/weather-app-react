const router = require("express").Router();
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();
const key = process.env.API_KEY;

router.get("/api/weather/:city", (req, res) => {
    const city = req.params.city;
    console.log(city);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${key}`)
    .then(({ data }) => {
        res.json(data);
    })
    .catch(err => res.json(err));
});


module.exports = router;