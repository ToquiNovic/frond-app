import React from 'react'

const AdminUser = ({User,setUser}) => {

    const handleChange = e => {
        setUser({
            ...User,
            [e.target.name]:e.target.value
        })
    }

    let {id,nombre1,nombre2,apellido1,apellido2,n_identificacion,tipo_usuario} = User

    const handleSubmit = () => {
        id = parseInt(id,10)
        n_identificacion = parseInt(n_identificacion,10)
        //validacion de los datos
        if (id === ''  || nombre1 === '' || apellido1 === '' || n_identificacion === '' || tipo_usuario === '') {
            alert ('Los campos con * son OBLIGATORIOS')
            return
        } 

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'content-Type' : 'application/json'},
            body: JSON.stringify(User)

        }
        fetch('/registrar/usuarios', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state user
        setUser({
            nombre1:"",
            nombre2:"",
            apellido1:"",
            apellido2:"",
            n_identificacion:'',
            tipo_usuario:""
        })


    }

    return(
        <form onSubmit={handleSubmit}>
          
            <div className='mb-3'>
                <label htmlFor='nombre1' className='from-label'>nombre1*</label>
                <input value = {nombre1} name="nombre1" onChange={handleChange} type="text" id="nombre1" className='from-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='nombre2' className='from-label'>nombre2</label>
                <input value = {nombre2} name="nombre2" onChange={handleChange} type="text" id="nombre2" className='from-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='apellido1' className='from-label'>apellido1*</label>
                <input value = {apellido1} name="apellido1" onChange={handleChange} type="text" id="apellido1" className='from-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='apellido2' className='from-label'>apellido2</label>
                <input value = {apellido2} name="apellido2" onChange={handleChange} type="text" id="apellido2" className='from-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='n_identificacion' className='from-label'>n_identificacion*</label>
                <input value = {n_identificacion} name="n_identificacion" onChange={handleChange} type="number" id="n_identificacion" className='from-control'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='tipo_usuario' className='from-label'>tipo_usuario*</label>
                <input value = {tipo_usuario} name="tipo_usuario" onChange={handleChange} type="text" id="tipo_usuario" className='from-control'></input>
            </div>
            
            <button type='submit' className='btn btn-primary'>SUBMIT</button>
        </form>
    );
}

export default AdminUser;