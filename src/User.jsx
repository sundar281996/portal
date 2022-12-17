import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [data, setdata] = useState([]);
  const [isLoading, setloading] = useState(false);
  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    setloading(true);
    let userdata = await axios.get(
      "https://628203969fac04c6540d712e.mockapi.io/user"
    );
    setdata(userdata.data);
    setloading(false);
  };
  const deleteuser = async (id) => {
    await axios.delete(
      `https://628203969fac04c6540d712e.mockapi.io/user/${id}`
    );
    loaddata();
  };
  // const data = [
  //   {
  //     id: "1",
  //     name: "sanjay",
  //     position: "DataAnalyst",
  //     office: "Drope",
  //     age: "26",
  //     startdate: "1/2/2021",
  //     salary: "800000",
  //   },
  //   {
  //     id: "2",
  //     name: "Hari",
  //     position: "tester",
  //     office: "zoho",
  //     age: "27",
  //     startdate: "11/12/2021",
  //     salary: "900000",
  //   },
  //   {
  //     id: "3",
  //     name: "Sundar",
  //     position: "developer",
  //     office: "IBM",
  //     age: "26",
  //     startdate: "4/1/2023",
  //     salary: "700000",
  //   },
  // ];
  // const navigate = useNavigate();
  return (
    <div>
      <div className=" d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="/portal/create-user"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create-User
        </Link>
      </div>
      {isLoading ? (
        <div className="mx-auto" style={{ width: "200px" }}>
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                DataTables Example
              </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>#SN</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>#SN</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {data.map((data, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.position}</td>
                          <td>{data.office}</td>
                          <td>{data.age}</td>
                          <td>{data.startdate}</td>
                          <td>${data.salary}</td>
                          <td>
                            <Link
                              to={`/portal/user/${data.id}`}
                              className="btn btn-sm btn-warning mr-2"
                            >
                              View
                            </Link>
                            <Link
                              to={`/portal/user/edit/${data.id}`}
                              className="btn btn-sm btn-primary mr-2"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => deleteuser(data.id)}
                              className="btn btn-sm btn-info mr-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
