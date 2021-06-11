import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-9246b-default-rtdb.firebaseio.com/",
});

export default instance;
