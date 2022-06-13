export interface Pelicula{
    id:number;
    titulo:string;
    poster:string;
}

export interface landingPageDTO{
    enCartelera?:Pelicula[];
    proximosEstrenos?:Pelicula[];
}