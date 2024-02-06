import React from 'react';
import {Link} from 'react-router-dom'
import Layout from './Layout'
import NavBar from '../Components/NavBar';


function Home() {
    return (
        <div>
            {/* <p>Home</p> */}
            <Link to={'/Layout'}> go to Layout </Link>
            {/* <p>SignIn</p> */}
            <Link to={'/SignIn'}> SignIn</Link>
            {/* <p>SignUp</p> */}
            <Link to={'/SignUp'}> SignUp</Link>
            
        </div>
        
          
    ) 
}

export default Home