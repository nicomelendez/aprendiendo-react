import { Link, useHistory } from "react-router-dom"
import './EstilosGenero.css';
import FormularioGeneros from "./FormularioGeneros";

export default function CrearGenero(){

    const history = useHistory();

    return(
        <div className="todo">
        <h3>Crear Género</h3>
        <FormularioGeneros modelo={{nombre:''}} 
                           onSubmit={async valores=>{
                            await new Promise(r=>setTimeout(r,3000));
                            console.log(valores);
                           }} 
        />
        </div>
    )
}