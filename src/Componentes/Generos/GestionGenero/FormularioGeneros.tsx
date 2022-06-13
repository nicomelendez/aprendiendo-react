import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { generoCreacionDTO } from "../../../Interfaces/generos.model";
import Button from "../../../Utils/Button";
import FormGroupText from "../../../Utils/FormGroupText";
import './EstilosGenero.css';

export default function FormularioGeneros(props:formularioGenerosProps){
    return(
        <Formik initialValues={props.modelo}
        onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre:Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps)=>{
                return (
                    <Form className="formulario">
                        <FormGroupText campo="nombre" lable="Nombre" />
                        <div className="botones">
                            <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                            <Link className="btn btn-danger" to="/generos">Cancelar</Link>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    )
}
interface formularioGenerosProps{
    modelo:generoCreacionDTO;
    onSubmit(valores:generoCreacionDTO, accion:FormikHelpers<generoCreacionDTO>):void;
}