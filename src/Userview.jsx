import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Userview() {
  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://628203969fac04c6540d712e.mockapi.io/user/${params.id}`
      );

      setuserdata(user.data);
    } catch (error) {}
  };
  const params = useParams();
  const [userdata, setuserdata] = useState({});
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container-fluid">
      <h1>name:{userdata.name}</h1>
      <hr></hr>
      <h1>position:{userdata.position}</h1>
      <hr></hr>
      <h1>office:{userdata.office}</h1>
      <hr></hr>
      <h1>age:{userdata.age}</h1>
      <hr></hr>
      <h1>salary:{userdata.salary}</h1>
    </div>
  );
}

export default Userview;
