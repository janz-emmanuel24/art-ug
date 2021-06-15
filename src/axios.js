import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://localhost:5001/art-ug/us-central1/api' // the api // cloud function
  baseURL: 'https://us-central1-art-ug.cloudfunctions.net/api'
});

export default instance;
