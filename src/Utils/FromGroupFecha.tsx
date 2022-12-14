import { useFormikContext } from "formik";
import MostrarErrorForm from "./MostrarErrorForm";

export default function FormGroupFecha(props:formGroupFechaProps){
    const {values, validateForm, touched, errors} = useFormikContext<any>();
    return(
        <div className="form-group">
            <label htmlFor={props.campo}>{props.label}</label>

            <input type="date" className="form-control" id={props.campo} name={props.campo} defaultValue={values[props.campo]?. toLocaleDateString('es-UY')}
            onChange={e=>{
                const fecha = new Date(e.currentTarget.value + 'T00:00:00');
                values[props.campo] = fecha;
                validateForm();
            }}
            />
            {touched[props.campo] && errors[props.campo] ? <MostrarErrorForm mensaje={'error'} /> : null}
        </div>
    )
}
interface formGroupFechaProps{
    campo:string;
    label:string;
}