import { info } from 'console';
import {useReducer,useEffect}from 'react'

interface AuthState{
    validador:boolean,
    token:string|null,
    username:string,
    nombre:string,
}

const initialState:AuthState ={
    validador:true,
    token:null,
    username:'',
    nombre:'',
}

type LoginPayload={
    username:string;
    nombre:string;
}
type AuthAction=
|{ type:'logout' }
|{ type:'login', payload:LoginPayload };

const authReducer = ( state:AuthState, action:AuthAction): AuthState => {
    switch ( action.type ) {
        case 'logout':
            return{
                validador:false,
                token:null,
                nombre:'',
                username:'',
            }
        case 'login':
            const {nombre, username} = action.payload
            return{
                validador:false,
                token:'hola',
                nombre,
                username
            } 
    
        default:
            return state;
    }
}


export const Login = () => {

    const [{validador,token,nombre}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type:'logout'})
        }, 1500);
    }, [])
    const login=()=> {
        dispatch({
            type:'login', 
            payload: {
                username: 'Fernando_p94', 
                nombre: 'Fernando'
            }
        })
    }
    if(validador){
        return (
            <>
             <h3>Login</h3>

             <div className="alert alert-info">
                 Validando...
             </div>
            </>
        )
    }
    const logout = () => {
        dispatch({type:'logout'})

    }
  return (
    <>
    <h3>Login</h3>
    {
        (token)
        ? <div className="alert alert-success">Conectado como:{nombre}</div>
        : <div className="alert alert-danger">Desconectado.</div>
    }

  {
    (token)
    ?(
        <button className="btn btn-danger"onClick={logout}>Logout</button> 
    )
    :(
        <button className="btn btn-primary" onClick={login}>Login</button>
    )
  }    
    </>
  )
}
