import axios from "axios";

const todoApi = axios.create({
    baseURL: "http://dummy-server.io/"
})

export default todoApi