// import React, { useState, useContext } from "react";
// import { StudentContext } from "./context/StudentsContext";
// import { TextInput, Button } from "@mantine/core";

// const StudentFrom= () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const { addStudent } = useContext(StudentContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && age) {
//       addStudent({ name, age: Number(age) });
//       setName("");
//       setAge("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//       <TextInput
//         label="Name"
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <TextInput
//         label="Age"
//         type="number"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//         required
//         style={{ marginTop: "10px" }}
//       />
//       <Button type="submit" style={{}} className="butt">
//         Add Student
//       </Button>
//     </form>
//   );
// };

// export default StudentFrom;


import  { useState, useContext } from "react";
import { StudentContext } from "./context/StudentsContext";
import { TextInput, Button } from "@mantine/core";

import { Link } from "react-router-dom";
const StudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [Email,setEmail]=useState("")
  const[course,setCourse]=useState("")
  const { addStudent } = useContext(StudentContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      addStudent({ name, age: Number(age) , Email, course});
      setName("");
      setAge("");
      setEmail("");
      setCourse("");
    }
  };
  return (
    <>
    <form   className="input" onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
     <h1 className="add">:bust_in_silhouette:Add New Student</h1>
        <p className="paraa">Fill in the information below to register a new student</p>
     <div className="input-row">
      <TextInput
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextInput
        label="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        style={{ marginTop: "10px" }}
      />
         <TextInput
     label="Email"
     type="Email"
     value={Email}
     onChange={(e) => setEmail(e.target.value)}
     required
   />
       <TextInput
     label="Course"
     type="text"
     value={course}
     onChange={(e) => setCourse(e.target.value)}
     required
   />
   </div>
      <Button type="submit" className="btn" style={{ marginTop: "10px" }}>
        Add Student
      </Button>
    </form>
    </>
  );
};
export default StudentForm;
