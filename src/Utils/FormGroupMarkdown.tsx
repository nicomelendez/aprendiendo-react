import { Field, useFormikContext } from "formik";
import ReactMarkDown from "react-markdown";
import './Css/FormGroupMarkDown.module.d.css';

export default function FormGroupMarkDown(props:formGroupMarkDownProps){
    
    const {values} = useFormikContext<any>();
    return(
        <div className="form-group form-markdown">
            <div>
                <label htmlFor="">{props.label}</label>
                <div>
                    <Field name={props.campo} as="textarea" className="form-textarea" />
                </div>
            </div>
            <br />
            <div>
                <label htmlFor="">{props.label} (preview):</label>
                <div className="markdown-container">
                    <ReactMarkDown>{values[props.campo]}</ReactMarkDown>
                </div>
            </div>
        </div>
    )
}
interface formGroupMarkDownProps{
    campo:string;
    label:string;
}