import React, { useState } from "react";
import './Student.css';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }

    if (formData.id === "") {
      const newStudent = { ...formData, id: students.length + 1 };
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    } else {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === formData.id ? formData : student
        )
      );
    }

    setFormData({
      id: "",
      name: "",
      age: "",
      email: ""
    });
  };

  const handleDelete = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  const handleEdit = (id) => {
    const editedStudent = students.find((student) => student.id === id);
    setFormData(editedStudent);
  };

  return (
    <div>
      <h2>Student Management</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label> <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Age:</label>
        <br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Add Student</button>
      </form>
      <h3 style={{ color: "green" }}>Student List:</h3>
      <table className="tables">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Customize</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(student.id)}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
