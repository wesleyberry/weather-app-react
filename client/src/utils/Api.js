import axios from "axios";

export default {
    hitAPI: city => axios.get("/api/weather/" + city)
};