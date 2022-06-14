import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { actorCreacionDTO } from "../../../Interfaces/actores.module";
import Button from "../../../Utils/Button";
import FromGroupText from "../../../Utils/FormGroupText";
import * as Yup from 'yup';
import FormGroupFecha from "../../../Utils/FromGroupFecha";
import FormGroupImagen from "../../../Utils/FormGroupImagen";
import './FormularioAcotresEstilos.module.d.css';

export default function FormularioActores(props:formularioActoresProps){
    return(
        <Formik initialValues={props.modelo}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({nombre:Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                fechaNacimiento:Yup.date().nullable().required('Este campo es requerido')})} >
        {(formikProps) => (
            <Form className="formularioActor">
                <div className="todoActor">
                <div className="cuerpo">
                <FromGroupText className="ALGO" campo="nombre" lable="Nombre" />
                <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento"/>
                <FormGroupImagen campo="foto" label="Foto" imagenURL={props.modelo.fotoURL}/>
                </div>
                <div className="boton">
                <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                <Link className="btn btn-danger" to="/actores">Cancelar</Link>
                </div>
                </div>
            </Form>
        )}
            
        </Formik>
    )
}
interface formularioActoresProps{
    modelo:actorCreacionDTO;
    onSubmit(valores:actorCreacionDTO,acciones:FormikHelpers<actorCreacionDTO>): void;
}