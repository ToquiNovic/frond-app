import React from 'react';
import config from '../config';

const UserList = ({User,SetUser,users, setListUpdated}) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('/eliminar/usuarios/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)

    }

    let {nombre1,nombre2,apellido1,apellido2,n_identificacion,tipo_usuario} = User

    const handleUpdate = id => {
        id = parseInt(id,10)
        n_identificacion = parseInt(n_identificacion,10)
        //validacion de los datos
        if (nombre1 === '' || apellido1 === '' || n_identificacion === '' || tipo_usuario === '') {
            alert ('Los campos con * son OBLIGATORIOS')
            return
        } 
        const requestInit = {
            method: 'PUT',
            headers: {'content-Type' : 'application/json'},
            body: JSON.stringify(User)
        }
        fetch( config.URL_BACKEND+'/actualizar/usuarios/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }


    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>nombre1</th>
                    <th>nombre2</th>
                    <th>apellido1</th>
                    <th>apellido2</th>
                    <th>n_identificacion</th>
                    <th>tipo_usuario</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.nombre1}</td>
                        <td>{user.nombre2}</td>
                        <td>{user.apellido1}</td>
                        <td>{user.apellido2}</td>
                        <td>{user.n_identificacion}</td>
                        <td>{user.tipo_usuario}</td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(user.id)} className='btn btn-danger'>DELETE</button>
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(user.id)} className='btn btn-dark'>ACTUALIZAR</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserList;