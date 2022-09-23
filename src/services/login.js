import axios from "axios";

const loginUser = ({ name, password }) => {
  axios
    .post("/login", { nombre1: name, contrasena: password })
    .then((res) => console.log(res.data));
};

export default {
  loginUser,
};
