import { useState } from "react";
import login from "../services/login";

const Login = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name && input.password) {
      return login.loginUser(input);
    }

    alert("Rellena los campoes pendejo de mierda1");
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{!input.name ? "Escribe un nombre valido!" : ""}</p>
      <input
        type="text"
        name="name"
        value={input.name}
        placeholder="Nombre"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={input.password}
        placeholder="Contraseña"
        onChange={handleChange}
      ></input>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Login;
