import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    product();
  }, []);
  const product = async () => {
    let productdata = await axios.get(
      "https://628203969fac04c6540d712e.mockapi.io/product"
    );
    setdata(productdata.data);
  };
  const deleteproduct = async (id) => {
    await axios.delete(
      `https://628203969fac04c6540d712e.mockapi.io/product/${id}`
    );
    product();
  };
  return (
    <div>
      <div className=" d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
        <Link
          to="/portal/create-product"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create-Product
        </Link>
      </div>
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables products
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataproductTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>#SN</th>
                    <th>id</th>
                    <th>image</th>
                    <th>proname</th>
                    <th>price</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#SN</th>
                    <th>id</th>
                    <th>image</th>
                    <th>proname</th>
                    <th>price</th>

                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {data.map((data, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{data.id}</td>
                        <td>{data.image}</td>
                        <td>{data.proname}</td>
                        <td>{data.price}</td>

                        <td>
                          <Link
                            to={`/portal/product/${data.id}`}
                            className="btn btn-sm btn-warning mr-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/product/edit/${data.id}`}
                            className="btn btn-sm btn-primary mr-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              deleteproduct(data.id);
                            }}
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
    </div>
  );
}

export default Product;
