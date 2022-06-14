import { useEffect, useState } from "react";
import ListadoPeliculas from "./Componentes/Pelicula/ListadoPeliculas";
import { landingPageDTO } from "./Interfaces/Peliculas.model";

export default function LadingPage(){
  
  const [peliculas,setPeliculas] = useState<landingPageDTO>({})

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setPeliculas(
        {enCartelera:[
          {id:1, titulo:'Spider-Man', poster:'https://m.media-amazon.com/images/I/61etmpQOO-L._AC_SY741_.jpg'},
          {id:2, titulo:'Batman', poster:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2020/09/poster-batman-2021-2064381.jpg?itok=Q1wMuVul'},
          {id:3, titulo:'Superman', poster:'https://m.media-amazon.com/images/I/51ycKbwoVmL._AC_.jpg'},
          {id:4, titulo:'El Resplandor', poster:'https://s1.eestatic.com/2020/05/22/series/cine/stanley_kubrick-peliculas-jack_nicholson_491961371_152371944_1706x960.jpg'},
      ], 
        proximosEstrenos:[
          {id:4, titulo:'Flash', poster:'https://i.ebayimg.com/images/g/PTgAAOSwk6FdgtGH/s-l1600.jpg'},
          {id:5, titulo:'Naruto', poster:'https://m.media-amazon.com/images/I/81EJzWGbN8L._AC_SL1500_.jpg'},
          {id:6, titulo:'Dragon Ball Z', poster:'https://i.ebayimg.com/images/g/XigAAOSwNMVaUS0b/s-l1600.jpg'},
        ]
    })
    },1000);
    return ()=> clearTimeout(timerId);
  })
  return(
    <>
      <div className="cartelera"> 
        <h3>En cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />
      </div>
      <div className="estrenos">
        <h3>Proximos estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>
    </>
  )
}