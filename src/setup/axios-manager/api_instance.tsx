import axios from "axios";
const BASE_URL = "http://api.programator.sk";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
