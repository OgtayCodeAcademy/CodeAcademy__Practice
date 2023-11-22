import { useState } from "react";

export default function Seans2({setSeans, ticketCount}) {
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13]
    let [empty, setEmpty] = useState(0);
  return (
    <>
      <button onClick={()=>{
        setSeans(1)
      }}>back</button>
      <button onClick={()=>{
        setSeans(3)
      }}>Next</button>
      <div className="empty_places">
        {array.map((place, idx)=>{
            return <button id={idx} key={idx} style={{padding: '10px', backgroundColor: 'white'}} onClick={(e)=>{
                if (empty < ticketCount && e.target.style.backgroundColor == 'blue' == false) {
                    setEmpty(++empty)
                    e.target.style.backgroundColor = 'blue';
                    console.log(empty);
                }else{
                    if (e.target.style.backgroundColor == 'blue') {
                        setEmpty(--empty)
                        e.target.style.backgroundColor = 'white';
                    }else{
                        alert(`${ticketCount} ticket is maximum`)
                    }
                }
            }}> </button>
        })}
      </div>
    </>
  );
}
