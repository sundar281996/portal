import React from "react";
import { useFormik } from "formik";

import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const formvalidation = yup.object({
  name: yup.string().required(),
  position: yup.string().required(),
  office: yup.string().required(),
  age: yup.number().required(),
  startdate: yup.date().required(),
  salary: yup.number().required(),
});

function Edituser() {
  const params = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://628203969fac04c6540d712e.mockapi.io/user/${params.id}`
      );
      formik.setValues({
        name: user.data.name,
        position: user.data.position,
        office: user.data.office,
        age: user.data.age,
        startdate: user.data.startdate,
        salary: user.data.salary,
      });
    } catch (error) {}
  };
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startdate: "",
      salary: "",
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://628203969fac04c6540d712e.mockapi.io/user/${params.id}`,
        values
      );
      navigate("/portal/user");
    },
    validationSchema: formvalidation,
  });
  return (
    <>
      <div className="  container  ">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="  col-lg-6 ">
              <label for="inputEmail4">name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="inputEmail4"
                placeholder="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="name"
              />
              {formik.errors.name && formik.touched.name
                ? formik.errors.name
                : ""}
            </div>

            <div className="   col-lg-6 ">
              <label for="Position">Position</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="Position"
                placeholder="Position"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="position"
              />
              {formik.errors.position && formik.touched.position
                ? formik.errors.position
                : ""}
            </div>
            <div className="  col-lg-6  ">
              <label for="Office">Office</label>
              <input
                type="text"
                className="form-control form-control-lg "
                id="Office"
                placeholder="Office"
                value={formik.values.office}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="office"
              />
              {formik.errors.office && formik.touched.office
                ? formik.errors.office
                : ""}
            </div>
            <div className=" col-lg-6">
              <label for="Age">Age</label>
              <input
                type="number"
                className="form-control form-control-lg"
                id="Age"
                placeholder="Age"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="age"
              />
              {formik.errors.age && formik.touched.age ? formik.errors.age : ""}
            </div>
            <div className=" col-lg-6">
              <label for="Startdate">Startdate</label>
              <input
                type="date"
                className="form-control form-control-lg"
                id="Startdate"
                placeholder="Startdate"
                value={formik.values.startdate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="startdate"
              />
              {formik.errors.startdate && formik.touched.startdate
                ? formik.errors.startdate
                : ""}
            </div>
            <div className="  col-lg-6">
              <label for="Salary">Salary</label>
              <input
                type="number"
                className="form-control form-control-lg"
                id="Salary"
                placeholder="Salary"
                value={formik.values.salary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="salary"
              />
              {formik.errors.salary && formik.touched.salary
                ? formik.errors.salary
                : ""}
            </div>
          </div>
          <button
            disabled={!formik.isValid}
            className="btn btn-lg  btn-primary mt-2"
            type="form-submit"
          >
            update
          </button>
        </form>
      </div>
    </>
  );
}

export default Edituser;
