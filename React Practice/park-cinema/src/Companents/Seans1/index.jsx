
export default function Seans1({ticketCount, setTicketCount, setSeans, filmPrice}) {
  return (
    <>
      <p>For kids</p>
      <select
        name="ticket"
        id="ticket"
        onClick={(e) => {
          setTicketCount(e.target.value);
          setTimeout(() => {
            e.target.value = 1;
            setTicketCount(0);
          }, 60000);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div
        style={{ display: "flex", alignItems: "center", gap: "30px" }}
        className="next"
      >
        <p>{ticketCount * filmPrice}</p>
        <button style={{ width: "50px", height: "20px" }} onClick={()=>{
            setSeans(2)
        }}>Next</button>
        <button style={{ width: "50px", height: "20px" }} onClick={()=>{
            setSeans(0)
        }}>Back</button>
      </div>
    </>
  );
}
