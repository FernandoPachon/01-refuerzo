import { useState,useEffect,useRef } from "react";
import { reqResApi } from '../api/reqRes';
import { Usuario } from '../interfaces/reqRes';
import{ReqResListado}from'../interfaces/reqRes';
export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef=useRef(1);


    useEffect(() => {
        return () => {        
            cargarUsuarios();       
        }     
    }, [])

    const cargarUsuarios =async()=> {

        const resp= await  reqResApi.get<ReqResListado>('/users',{
            params: {
                page: paginaRef.current
            }
        })

            if(resp.data.data.length > 0) {
                setUsuarios(resp.data.data);
                
            }else{
                paginaRef.current --;
                //alert('No hay mas registros');
            }
           
    }
    
        const paginaSiguiente =async()=> {

            cargarUsuarios();
            paginaRef.current ++;
               
        } 
    
    const paginaAtrÁs=async()=>{
           if(paginaRef.current>1){
             paginaRef.current--;
             cargarUsuarios();
           }
               
        
    }
    return { usuarios, paginaAtrÁs,paginaSiguiente}
}