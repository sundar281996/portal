import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Productview() {
  let loaddata = async () => {
    let prodata = await axios.get(
      `https://628203969fac04c6540d712e.mockapi.io/product/${params.id}`
    );
    setproductdata(prodata.data);
  };
  const params = useParams();
  const [productdata, setproductdata] = useState({});
  useEffect(() => {
    loaddata();
  }, []);
  return (
    <>
      <h1>{productdata.id}</h1>
      <br />
      <h1>{productdata.proname}</h1>
      <br></br>
      <h1>{productdata.image}</h1>
    </>
  );
}

export default Productview;
