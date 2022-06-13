import { ErrorMessage, Field } from "formik";
import MostrarErrorForm from "./MostrarErrorForm";

export default function FromGroupText(props: formGroupTextProps){
    return(
        <div className="form-group">
            {props.lable ?  <label htmlFor={props.campo}>{props.lable}</label> : null}
           
            <Field name={props.campo} className="form-control" placeholder={props.placeholder} />
            <ErrorMessage name={props.campo}>
                {
                    mensaje=> <MostrarErrorForm mensaje={mensaje} />
                }
            </ErrorMessage>
        </div>
    )
}
interface formGroupTextProps{
    campo:string;
    lable?:string;
    placeholder?:string;
}