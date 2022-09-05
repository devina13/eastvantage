import React, { useEffect } from "react";
import "./App.css";
import Display from "./Components/Display";
import axios from "axios";

function App() {
  // const [randomUser, setRandomUser] = useState<Person>();
  // const getData = () => {
  //   axios.get("https://randomuser.me/api").then((res) => {
  //     const user = res.data.results[0];
  //     localStorage.setItem("user", JSON.stringify(user));
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);



  return (
    <div className="App">
      <Display />
    </div>
  );
}
export default App;
