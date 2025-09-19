import React, { useState, useContext } from "react";
import { StudentContext } from "./context/StudentsContext";
import { TextInput, Button } from "@mantine/core";

const StudentFrom= () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const { addStudent } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      addStudent({ name, age: Number(age) });
      setName("");
      setAge("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
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
      <Button type="submit" style={{}} className="butt">
        Add Student
      </Button>
    </form>
  );
};

export default StudentFrom;


