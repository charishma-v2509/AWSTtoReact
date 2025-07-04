import React from "react";

function App() {
  const students = [
    { id: 1, name: "Alice", age: 20, grade: "A" },
    { id: 2, name: "Bob", age: 21, grade: "B" },
    { id: 3, name: "Charlie", age: 19, grade: "A" },
    { id: 4, name: "David", age: 22, grade: "C" },
    { id: 5, name: "Eva", age: 20, grade: "B" },
    { id: 6, name: "Frank", age: 23, grade: "A" },
    { id: 7, name: "Grace", age: 21, grade: "C" },
    { id: 8, name: "Hannah", age: 22, grade: "B" },
    { id: 9, name: "Ivy", age: 20, grade: "A" },
    { id: 10, name: "Jack", age: 19, grade: "B" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Data</h1>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
