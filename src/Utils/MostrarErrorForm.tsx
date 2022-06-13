export default function MostrarErrorForm(props: mostrarErrorFormProps){
    return(
              <div className="text-danger">{props.mensaje}</div>
    )
}
interface mostrarErrorFormProps{
    mensaje?:string;
}