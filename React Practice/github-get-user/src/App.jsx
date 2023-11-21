
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { useState } from "react";
import Card from "./Components/Card";
import Table from "./Components/Table";

function App() {
  let [value, setValue] = useState("");
  let [user, setUser] = useState([]);
  let [table, setTable] = useState([]);
  console.log(table);
  return (
    <>
      <Header setUser={setUser} value={value} setValue={setValue}></Header>
      {(user.name && <Card table={table} setTable={setTable} user={user}></Card>)}
      {(table[0] && <Table table={table}></Table>)}
    </>
  );
}

export default App;
