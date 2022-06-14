import IndiceGeneros from "./Componentes/Generos/IndiceGeneros";
import LadingPage from "./LandingPage";
import CrearGenero from "./Componentes/Generos/GestionGenero/CrearGenero";
import EditarGenero from "./Componentes/Generos/GestionGenero/EditarGenero";
import CrearActores from "./Componentes/Actores/GestionActores/CrearActores";
import EditarActores from "./Componentes/Actores/GestionActores/EditarActores";
import IndiceActores from "./Componentes/Actores/Indice-Actores";
import CrearCine from "./Componentes/Cines/GestionCines/CrearCine";
import EditarCine from "./Componentes/Cines/GestionCines/EditarCine";
import IndiceCines from "./Componentes/Cines/IndiceCines";
import CrearPelicula from "./Componentes/Pelicula/GestionPelicula/CrearPelicula";
import EditarPelicula from "./Componentes/Pelicula/GestionPelicula/EditarPelicula";
import FiltroPeliculas from "./Componentes/Pelicula/FiltroPeliculas";
import Redireccionar from "./Componentes/RutaNoEncontrada/Redireccionar";

const rutas = [
    //Generos
    {path: '/generos/crear', componente:CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente:EditarGenero},
    {path: '/generos', componente:IndiceGeneros,expect:true},
    //Actores
    {path: '/actores/crear', componente:CrearActores},
    {path: '/actores/editar/:id(\\d+)', componente:EditarActores},
    {path: '/actores', componente:IndiceActores,expect:true},
    //Cines
    {path: '/cines/crear', componente:CrearCine},
    {path: '/cines/editar/:id(\\d+)', componente:EditarCine},
    {path: '/cines', componente:IndiceCines,expect:true},
     //Peliculas
    {path: '/peliculas/crear', componente:CrearPelicula},
    {path: '/peliculas/editar:id(\\d+)', componente:EditarPelicula},
    {path: '/peliculas/filtro', componente:FiltroPeliculas ,expect:true},
    //Home
    {path:'/', componente:LadingPage, exact:true},
     //Rutas no encontradas
    {path:'*',componente:Redireccionar}
];

export default rutas;