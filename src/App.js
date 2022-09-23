import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import AdminUser from "./components/AdminUsers";
import Login from "./components/login";
import config from "./config";

function App() {
  const [User, setUser] = useState({
    id: 0,
    nombre1: "",
    nombre2: "",
    apellido1: "",
    apellido2: "",
    n_identificacion: 0,
    tipo_usuario: "",
  });

  const [listUpdated, setListUpdated] = useState(false);

  const [users, setusers] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      fetch(config.URL_BACKEND+"/usuarios")
        .then((res) => res.json())
        .then((res) => setusers(res));
    };
    getUsers();
    setListUpdated(false);
  }, [listUpdated]);

  return (
    <Fragment>
      <Navbar brand="SIGEL" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Lista de Usuarios</h2>
            <UserList
              User={User}
              setUser={setUser}
              users={users}
              setListUpdated={setListUpdated}
            />
          </div>
          <div></div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Administrar Usuarios</h2>
            <AdminUser User={User} setUser={setUser} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
