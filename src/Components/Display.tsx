import { ReactElement, useState, useEffect } from "react";
import Person from "../model";
import axios from "axios";
import "./styles.css"

function Display() {
  const [singleUser, setSingleUser] = useState<Person>();

  const getData = () => {
    axios.get("https://randomuser.me/api").then((res: any) => {
      const { name, email } = res.data.results[0]; //Destructering the received data at one go
      localStorage.setItem("user", JSON.stringify({ name, email })); //Setting only the required field to local storage
      setSingleUser({
        email,
        name: `${name?.title || ""} ${name?.first || ""} ${name?.last || ""}`,
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="center">
      <div className="card" style={{ width: "28rem" }}>
        <div className="card-body">
          <h5 className="card-title">Users List</h5>
          <hr/>
          {/* <h6 className="card-subtitle mb-2 text-muted">Full name and e-mail id</h6> */}
          <p className="card-text">
          <i className="fas fa-user"></i> Name:<br/> <em>{singleUser?.name || ""} </em>
          </p>
          <p className="card-text">
          <i className="fas fa-envelope"></i> Email:<br/>
          <em>{singleUser?.email}</em>
          </p>
          <button
        className="btn btn-primary card-link "
        onClick={() =>{getData();}}>Next User </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Display;
