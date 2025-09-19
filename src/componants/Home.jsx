import { Link } from "react-router-dom";


import Home01 from "../assets/image01.png"
import Home02 from "../assets/image03.png"
import Home03 from "../assets/image04.webp"
import Home04 from "../assets/image02.png"
import Home05 from "../assets/image05.png"
import Fb from "../assets/Fbimage.webp"
import Tw from "../assets/Twimage.jpeg"
import Ins from "../assets/Ins.jpeg"

export default  function Home(){

     return(
      <div id="main-home" className="color">
       <div id="main nav">
      <h1 className="font">WelCome To Alpha Academy</h1>
      <img className="image01" src={Home01} alt="" />
   <br /><br />
      <p className="size">Education is the key that unlocks the door to success.<br />
         What you learn today becomes the strength to achieve your dreams tomorrow.
         <br /> Even small efforts done consistently turn into great achievements.</p>
       <div class="btn">
        <Link to="/Students"> <button className="btn01">View all students</button></Link>
           <Link to="/Addstudents"> <button className="btn02">Add new students</button></Link>  
      </div> 
      </div>
      <br /><br />
     <div className="box" style={{display:"flex"}}>
               <div className="box01">
          <img src="" alt="" />
          <h1>Students details</h1>
          <p>
               View, search, and manage all student records in one place.
          </p>
          <Link to="/Students"> <button  className="btn03">View students details</button></Link>
          </div>
          <div className="box02">
               <img src="" alt="" />
          <h1>Add new students</h1>
          <p>
               Register new students with comprehensive profile information.
          </p>
          <Link to="/StudentList"> <button  className="btn04">Add new students</button></Link>
          </div>
          <div className="box03">
               <img src="" alt="" />
          <h1>Add new students</h1>
          <p>
               Track course enrollment and student performance metrics.
          </p>
          <Link to="/About"> <button  className="btn05">Learn more</button></Link>
          </div>
         
          
     </div> 
     <br /><br />
     <div className="mar03">
          <img className="mar01" src={Home03} alt="" />
          <br /><br />
      <p className="leval">Level Up Your Skills <br />
for a Brighter Future</p> 
<br /><br />
<img className="mar02" src={Home04} alt="" />
</div>
<br /><br /> 
<img src={Home02} alt="" />
<br /><br />

<br /><br />
<div className="page">
<Link to="https://www.facebook.com/AlphaAcademyUK"><img className="fb" src={Fb} alt="click our fb page" /></Link>
<br /><br />
<Link to="https://x.com/AlphaAcadmy"><img  className= "tw" src={Tw} alt="" /></Link>
<br /><br />
<Link to="https://www.instagram.com/alphaacademyuk/"><img className ="ins"src={Ins} alt="" /></Link>
</div>
<img src={Home05} alt="" />

</div>
)

}