import axios from "axios";

const api= axios.create({
    baseU: "http:/localhost::3000",
    headers: {
        "Content-Type": "aplication/json"
    }
})