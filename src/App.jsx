
import Navbar from './componants/navbar'
import Home from './componants/Home'

import StudentFrom from './componants/StudentFrom'
import About from './componants/About'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import React from "react";
import { MantineProvider } from "@mantine/core";
import { StudentProvider } from "./componants/context/StudentsContext";


import { Container, Title } from "@mantine/core";
import StudentList from './componants/StudentList'




function App() {
  

  return (

  
    <>
         < Navbar />
       
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
       
         <Route path='/Addstudents' element={<StudentFrom/>}></Route>
          <Route path='/About' element={<About/>}></Route>
       </Routes>
   
        {/* <MantineProvider >
         <StudentProvider>
      */}
 
        <Container size="sm">
          <Title order={2} align="center" style={{ margin: "20px 0" }}>
            Student Management System
          </Title>
          < StudentFrom />
         <StudentList/>
        </Container>
        {/* </StudentProvider>
        </MantineProvider> */}
   
     
    
       
    </>
  )
}

export default App;
