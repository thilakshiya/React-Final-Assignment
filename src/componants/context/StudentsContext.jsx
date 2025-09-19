import React, { createContext, useState } from "react";
import studentsData from "../data/students.json";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(studentsData);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
