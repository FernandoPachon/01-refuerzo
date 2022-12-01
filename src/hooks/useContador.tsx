import { useState } from "react";

export const useContador = (inicial:number=10) => {
    const [valor, setValor] = useState(0);
    const acumular=(numero:number)=>{
     setValor(valor+numero);
    } 
    return { valor, acumular }
}
;