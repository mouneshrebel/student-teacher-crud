import React, { useState } from "react";
import "./Teacher.css";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }

    if (formData.id === "") {
      const newTeacher = { ...formData, id: teachers.length + 1 };
      setTeachers((prevTeachers) => [...prevTeachers, newTeacher]);
    } else {
      setTeachers((prevTeachers) =>
        prevTeachers.map((teacher) =>
          teacher.id === formData.id ? formData : teacher
        )
      );
    }

    setFormData({
      id: "",
      name: "",
      age: "",
      email: "",
    });
  };

  const handleDelete = (id) => {
    setTeachers((prevTeachers) =>
      prevTeachers.filter((teacher) => teacher.id !== id)
    );
  };

  const handleEdit = (id) => {
    const editedTeacher = teachers.find((teacher) => teacher.id === id);
    setFormData(editedTeacher);
  };

  return (
    <div>
      <h2>Teacher Management</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label> <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /> <br />
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
        <button type="submit">Add Teacher</button>
      </form>
      <h3 style={{ color: "green" }}>Teacher List:</h3>
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
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.age}</td>
              <td>{teacher.email}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(teacher.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(teacher.id)}
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

export default Teacher;
