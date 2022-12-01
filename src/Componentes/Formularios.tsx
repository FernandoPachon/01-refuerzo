import { useState } from 'react';
import { useForm } from '../hooks/useForm';


export const Formularios=()=> {

  const {formulario,email,contraseña,onChange}=useForm({
    email:'test@example.com',
    contraseña: 'asdf',
  });
   
    return(
        <>
            <h2>Formularios</h2>
            <input 
            type="text"
            className="form-control"
            placeholder="email"
            value={email}
            onChange={({target})=>onChange(target.value,'email')}
            />
            <input 
            type="text"
            className="form-control mt-2 mb-2"
            placeholder="contraseña"
            value={contraseña}
            onChange={({target})=>onChange(target.value,'contraseña')}
            />
            <code>
                <pre>{JSON.stringify(formulario,null,2)}</pre>
            </code>
        </>
    )
    }