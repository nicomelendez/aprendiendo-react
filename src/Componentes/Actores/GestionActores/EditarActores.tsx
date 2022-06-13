import FormularioActores from "./FormularioActores";

export default function EditarActores(){
    return(
    <>
        <h3>Editar Actores</h3>
        <FormularioActores modelo={{nombre:'Tom Holland', fechaNacimiento:new Date('19996-06-01T00:00:00')}} onSubmit={valores=>console.log(valores)}/>
    </>
    )
}