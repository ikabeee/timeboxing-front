import axios from "axios";

const api= axios.create({
    baseUrl: "http:/localhost::3000",
    headers: {
        "Content-Type": ""
    }
})