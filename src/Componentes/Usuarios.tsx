import {useEffect,useRef,useState} from "react"
import { reqResApi } from '../api/reqRes';
import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';
import{ReqResListado}from'../interfaces/reqRes';

export const Usuarios = () => {
    const {usuarios,paginaAtrÁs,paginaSiguiente} =useUsuarios()
    const renderItem=({id,first_name,last_name,email,avatar}:Usuario)=> {
        return (
    <tr key={id.toString()}> 
                <td>
                    <img src={avatar} 
                    alt={first_name}
                    style={{
                        width: 35,
                        borderRadius: 100}}
                    />  
                </td>
                <td>{first_name}{last_name}</td>
                <td>{email}</td>
            </tr>
        )
    };
  return (
  
    <>
    <h2>Usuarios: </h2>
    <table className="table">
        <thead >
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        {
        usuarios.map(renderItem)
        }
        </tbody>
    </table>
    <button 
    className="btn btn-primary"
    onClick={paginaAtrÁs}
    >
       Atrás
    </button>
    &nbsp;
    &nbsp;
    <button 
    className="btn btn-primary"
    onClick={paginaSiguiente}
    >
        Siguiente
    </button>
    </>
  )
  
}
