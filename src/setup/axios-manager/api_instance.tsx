import axios from "axios";
export const BASE_URL = "http://api.programator.sk";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
