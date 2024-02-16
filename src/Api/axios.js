import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-50ee4/us-central1/api",
  // deployed version of firebase function
  // baseURL: "https://api-abyjie4qeq-uc.a.run.app",

  // deployed version of amazon server on render.com
  baseURL: "https://amazonapi-fr69.onrender.com",
});

export { axiosInstance };
