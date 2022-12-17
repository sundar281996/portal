import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";

const formvalidation = yup.object({
  proname: yup.string().required(),
  price: yup.number().required(),
  image: yup.string().required(),
});

function Editproduct() {
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      proname: "",
      price: "",
      image: "",
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://628203969fac04c6540d712e.mockapi.io/product/${params.id}`,
        values
      );
      alert("updated Created");
      navigate("/portal/product");
    },
    validationSchema: formvalidation,
  });
  useEffect(() => {
    loaduser();
  }, []);
  const loaduser = async () => {
    let productdata = await axios.get(
      `https://628203969fac04c6540d712e.mockapi.io/product/${params.id}`
    );
    formik.setValues({
      proname: productdata.data.proname,
      price: productdata.data.price,
      image: productdata.data.image,
    });
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="  container  ">
          <div className="row">
            <div className="  col-lg-6 ">
              <label for="inputEmail4">Proname</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="inputEmail4"
                placeholder="productname"
                name="proname"
                value={formik.values.proname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.proname && formik.touched.proname
                ? formik.errors.proname
                : ""}
            </div>
            <div className="  col-lg-6 ">
              <label for="price">Price</label>
              <input
                type="number"
                className="form-control form-control-lg"
                id="price"
                placeholder="price"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.price && formik.touched.price
                ? formik.errors.price
                : ""}
            </div>
            <div className="  col-lg-6 ">
              <label for="price">Image</label>
              <input
                type="url"
                className="form-control form-control-lg"
                id="image"
                placeholder="enter your imageurl"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.image && formik.touched.image
                ? formik.errors.image
                : ""}
            </div>
          </div>
          <button
            className="btn btn-lg  btn-primary mt-2"
            disabled={!formik.isValid}
            type="form-submit"
          >
            update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Editproduct;
