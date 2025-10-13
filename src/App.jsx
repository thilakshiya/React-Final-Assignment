
import Navbar from './componants/navbar'
import Home from './componants/Home'
import About from './componants/About'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentList from "./componants/StudentList"



function App() {
  
          return (

                 <>
         < Navbar />
         <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/Addstudents' element={<StudentList/>}></Route>
         <Route path='/About' element={<About/>}></Route>
         </Routes>
   
       
     </>
  )
}

export default App;
