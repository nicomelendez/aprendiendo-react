import { Pelicula } from "../../Interfaces/Peliculas.model";
import './PeliculaIndividual.module.css';
export default function PeliculaIndividual(props: PeliculaIndividualProps){

    const construirLink = () => `/pelicula/${props.pelicula.id}`

    return(
        <div className="card">
            <img  className="card-img" src={props.pelicula.poster} alt="Poster" />
            <div className="card-body">
            <p className="card-title">
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
            </div>
        </div>
    )
}
interface PeliculaIndividualProps{
    pelicula:Pelicula;
}