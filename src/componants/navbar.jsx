import { Link } from "react-router-dom"
import HomeImage from "../assets/education-logo-design-template_1286368-119007.jpg"

export default function Navbar() {

    return (
        <>
            {/* <nav>
    <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Students">Students</Link></li>
        <li><Link to="/Addstudents">Add students</Link></li>
        <li><Link to="/About">About</Link></li>
    </ul>
    
      
      
    
  </nav> */}


            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={HomeImage} class="h-20" alt="" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alpha Academy</span>
                    </Link>
                    
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</Link>
                            </li>
                           
                            <li>
                                <Link to="/StudentList" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add  Students</Link>
                            </li>
                            <li>
                                <Link to="/About" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )

}   