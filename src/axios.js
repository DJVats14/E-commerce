import axios from 'axios'

const instance = axios.create({
    //the API URL (cloud functioin)
    baseURL: 'http://localhost:5001/clone-778d0/us-central1/api'
});

export default instance;