import { NavLink } from "react-router-dom";

export default function Menu(){
    const claseActiva = "active";
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink activeClassName={claseActiva} to="/" className="navbar-brand">React Películas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} to="/generos">Géneros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} to="/peliculas/filtro">Filtrar Peliculas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} to="/actores">Actores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} to="/cines">Cines</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva} to="/peliculas/crear">Crear Película</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}