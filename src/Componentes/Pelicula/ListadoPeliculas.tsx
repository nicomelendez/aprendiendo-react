import { Pelicula } from "../../Interfaces/Peliculas.model";
import PeliculaIndividual from "./PeliculaIndividual";
import ListadoGenerico from "../../Utils/ListadoGenerico";
import './ListadoPeliculas.module.css';

export default function ListadoPeliculas(props: ListadoPeliculasProps){
        return(
        <div className="peliculasLista">
            <div className="prueba2">
                <ListadoGenerico listado={props.peliculas}>
                    <div className="car">
                        {props.peliculas?.map(pelicula=>
                        <PeliculaIndividual pelicula={pelicula}
                                            key={pelicula.id}
                        />)}
                    </div>
                </ListadoGenerico>
            </div>
        </div>
        )
}
interface ListadoPeliculasProps{
    peliculas?:Pelicula[];
}