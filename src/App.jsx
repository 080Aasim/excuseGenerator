import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [showEx, setShowEx] = useState(null);

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setShowEx(res.data[0]);
    })
  };

  return (
    <div>
      <h1>Generate An Excuse</h1>
      <div className="btn-ex">
      <div className="btn">
      <button onClick={() => fetchData("family")}>Family</button>
      <button onClick={() => fetchData("office")}>Office</button>
      <button onClick={() => fetchData("children")}>Children</button>
      <button onClick={() => fetchData("college")}>College</button>
      <button onClick={() => fetchData("party")}>Party</button>
      <button onClick={() => fetchData("funny")}>Funny</button>
      <button onClick={() => fetchData("unbelievable")}>Unbelievable</button>
      <button onClick={() => fetchData("developers")}>Developers</button>
      <button onClick={() => fetchData("gaming")}>Gaming</button>
      </div>
      <h1 className="ex">{showEx?.excuse}</h1>
      </div>
    </div>
  );
}

export default App;
