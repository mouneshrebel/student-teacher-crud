import React from "react";
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Student from "./Student";
import Teacher from "./Teacher";
import './Admin.css'

function Admin() {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/students" activeClassName="active">Student Management</NavLink>
            </li>
            <li>
              <NavLink to="/teachers" activeClassName="active">Teacher Management</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/students" element={<Student />} />
          <Route path="/teachers" element={<Teacher />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Admin;
