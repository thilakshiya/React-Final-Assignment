// import React, { useContext } from "react";
// import { StudentContext } from "./context/StudentsContext";
// import { Card, Text } from "@mantine/core";

// const StudentList = () => {
//   const { students } = useContext(StudentContext);

//   return (
//     <div>
//       {students.map((student) => (
//         <Card key={student.id} shadow="sm" padding="lg" style={{ margin: "10px 0" }}>
//           <Text>Name: {student.name}</Text>
//           <Text>Age: {student.age}</Text>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default StudentList;

import React, { useContext } from "react";
import { StudentContext } from "./context/StudentsContext";
import { Card, Text } from "@mantine/core";
import StudentForm from "../componants/StudentFrom";

const StudentList = () => {
  const { students } = useContext(StudentContext);
  return (
    <>
      <div className="student-form">
        <StudentForm />
      </div>
      <div className="student-list-container">
        <div className="card-flex">
          {students.map((student, index) => (
            <Card key={index} className="card">
              <div >
              <Text>Name: {student.name}</Text>
              <Text>Age: {student.age}</Text>
              <Text>Email: {student.Email}</Text>
              <Text>Course: {student.Course}</Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default StudentList;