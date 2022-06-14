import FormularioActores from "./FormularioActores";

export default function CrearActores(){
    return(
    <>
        <h3>Crear Actores</h3>
        <FormularioActores modelo={{id:0 ,nombre:'', fechaNacimiento:undefined}} onSubmit={valores=>console.log(valores)}/>
    </>
    )
}