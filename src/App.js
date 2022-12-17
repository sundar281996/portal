import "./css/sb-admin-2.css";

import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import Topbar from "./Topbar";
import User from "./User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Portal from "./Portal";
import Createuser from "./Createuser";
import Register from "./register";
import Userview from "./Userview";
import Edituser from "./Edituser";
import Product from "./Product";
import CreateProduct from "./CreateProduct";
import Productview from "./Productview";
import Editproduct from "./Editproduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user" element={<User />} />
            <Route path="user/:id" element={<Userview />} />

            <Route path="user/edit/:id" element={<Edituser />} />
            <Route path="create-user" element={<Createuser />} />
            <Route path="product" element={<Product />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="product/:id" element={<Productview />} />
            <Route path="product/edit/:id" element={<Editproduct />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
