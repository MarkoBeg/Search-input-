import "./App.css";
import { useState } from "react";
import { data } from "./data";


function App() {
  const [filter, setFilter] = useState("");
  return (
    <div className="app">
      <h1>Search by Name or LastName</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
      />
      {data
        .filter((value) => {
          if (setFilter === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(filter.toLowerCase()) ||
            value.lastName.toLowerCase().includes(filter.toLowerCase())
          ) {
            return value;
          }
        })
        .map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.name}</h3>
              <h4>{item.lastName}</h4>
            </div>
          );
        })}
    </div>
  );
}

export default App;
