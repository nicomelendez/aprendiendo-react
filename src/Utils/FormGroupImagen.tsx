import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";
import './Css/FormEstilos.module.d.css';

export default function FormGroupImagen(props:formGroupFechaProps){

    const divStyle = {marginTop:'10px'}
    const imgStyle = {width:'450px'}
    const [imagenBase64, setImagenBase64] = useState('');
    const [imagenURL, setImagenURL] = useState(props.imagenURL);
    const {values} = useFormikContext<any>();

    const ManejarOnChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.files){
            const archivo = e.currentTarget.files[0];
            aBase64(archivo).then((valor:string)=>setImagenBase64(valor)).catch(error => console.error(error))

            values[props.campo] = archivo;
            setImagenURL('');
        }
    }
    const aBase64 = (file:File) => {
        return new Promise<string>((resolve,reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }
    return(
        <div className="form-group">
            <label htmlFor={props.label}>{props.label}</label>
            <div className="boton">
                <input type="file" accept=".jpg, .jpeg, .png" onChange={ManejarOnChange} />
            </div>
            {imagenBase64 ? 
            <div className="foto">
                <div>
                    <img src={imagenBase64} alt="imagen seleccionada" />
                </div>
            </div> : null}
            {imagenURL ? 
            <div className="foto">
                <div>
                    <img src={imagenURL} alt="imagen seleccionada" />
                </div>
            </div> : null}
        </div>
    )
}
interface formGroupFechaProps{
    campo:string;
    label:string;
    imagenURL:string;
}
FormGroupImagen.defaultProps ={
    imagenUrl:''
}