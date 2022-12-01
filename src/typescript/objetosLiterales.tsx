interface Persona{
    nombre:string;
    edad:number;
    dirección:Dirección;

}
interface Dirección{
    país:string;
    region:string;

}


export const ObjetosLiterales = () => {

    const persona:Persona = {
        nombre:'Fernando',
        edad:28,
        dirección:{
            país:'Colombia',
            region:'llanos'
        }
    }


  return (
    <>
    <h3>objetos Literales</h3>
    <code>
        <pre>
            {JSON.stringify(persona,null,2)}
        </pre>
    </code>
    </>
    
    
  )
}
