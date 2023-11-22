import { useEffect, useState } from "react";
import Seans1 from "./Companents/Seans1";
import Seans2 from "./Companents/Seans2";
import Seans3 from "./Companents/Seans3";
import { getFilms } from "./API";

function App() {
  let [ticketCount, setTicketCount] = useState(0);
  let [seans, setSeans] = useState(0);
  let [films, setFilms] = useState([]);
  let [currentFilm, setCurrentFilm] = useState([]);
  let [filmPrice, setFilmPrice] = useState(0);
  useEffect(()=>{
    getFilms().then((filmss)=>{
      setFilms([...filmss])
    })
  }, [])
  return (
    <>
      {(seans == 0 && <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Empty places</th>
            <th>Buy Ticket</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film, idx)=>{
            return <tr key={idx}>
              <td>{film.name} </td>
              <td>{film.emptySeat} </td>
              <td><button onClick={()=>{
                setSeans(1)
                setCurrentFilm(film)
                setTicketCount(film.emptySeat)
                setFilmPrice(film.price)
              }}>Buy</button></td>
            </tr>
          })}
        </tbody>
      </table>)}
      {((seans == 1 || seans == 2 || seans == 3)  && <h1>{currentFilm.name}</h1>)}
      {((seans == 1 || seans == 2 || seans == 3)   && <div style={{ display: "flex", gap: "15px" }} className="box">
        <p style={{color: (seans == 1 && "red")}}>1 Seans</p>
        <p style={{color: (seans == 2 && "red")}}>2 Seans</p>
        <p style={{color: (seans == 3 && "red")}}>3 Seans</p>
      </div>)}
      {(seans == 1 && <Seans1 filmPrice={filmPrice} setSeans={setSeans} ticketCount={ticketCount} setTicketCount={setTicketCount}></Seans1>)}
      {(seans == 2 && <Seans2 ticketCount={ticketCount} setSeans={setSeans}></Seans2>)}
      
      {(seans == 3 && <Seans3 setSeans={setSeans}></Seans3>)}
    </>
  );
}

export default App;
