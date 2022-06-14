import FormularioActores from "./FormularioActores";

export default function EditarActores(){
    return(
    <>
        <h3>Editar Actores</h3>
        <FormularioActores modelo={{nombre:'Tom Holland', fechaNacimiento:new Date('19996-06-01T00:00:00'),fotoURL:'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/01/10161536/GettyImages-902343012.jpg', id:1}} onSubmit={valores=>console.log(valores)}/>
    </>
    )
}