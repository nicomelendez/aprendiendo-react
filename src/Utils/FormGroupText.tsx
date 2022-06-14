import { ErrorMessage, Field } from "formik";
import MostrarErrorForm from "./MostrarErrorForm";

export default function FromGroupText(props: formGroupTextProps){
  
    return(
        <div className={`form-group  ${props.className }`}>
            {props.lable ?  <label htmlFor={props.campo}>{props.lable}</label> : null}
           <div className="texto">
            <Field name={props.campo} className="form-control" placeholder={props.placeholder} />
           </div>
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
    className:string;
}