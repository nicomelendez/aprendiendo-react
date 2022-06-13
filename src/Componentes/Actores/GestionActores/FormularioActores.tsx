import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { actorCreacionDTO } from "../../../Interfaces/actores.module";
import Button from "../../../Utils/Button";
import FromGroupText from "../../../Utils/FormGroupText";
import * as Yup from 'yup';
import FormGroupFecha from "../../../Utils/FromGroupFecha";

export default function FormularioActores(props:formularioActoresProps){
    return(
        <Formik initialValues={props.modelo}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({nombre:Yup.string().required('Este campo es requerido').primeraLetraMayuscula()})} >
        {(formikProps) => (
            <Form>
                <FromGroupText campo="nombre" lable="Nombre" />
                <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento"/>
                <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                <Link className="btn btn-danger" to="/actores">Cancelar</Link>
            </Form>
        )}
            
        </Formik>
    )
}
interface formularioActoresProps{
    modelo:actorCreacionDTO;
    onSubmit(valores:actorCreacionDTO,acciones:FormikHelpers<actorCreacionDTO>): void;
}