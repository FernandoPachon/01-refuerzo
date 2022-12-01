

export const TiposBasicos = () => {

    const nombre: string|number='Fernando';
    const edad:number=35;
    const estaActivo:boolean=true;

    const poderes:string[]=['velocidad','inmortalidad','volar'];
  return (
    <>
      <h1>Tipos Básicos</h1>  
      {nombre},{edad},{(estaActivo)?'activo':'no activo'}
      <br />
      {poderes.join(', ')}
    </>
  )
}
