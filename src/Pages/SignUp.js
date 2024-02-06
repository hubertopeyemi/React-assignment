import react from 'react';
import {Link} from "react-router-dom"

function SignUp () {
    return (
        <div>
            <h1>Create an Account</h1> <br/>

            <div>
                <label>Email: </label> 
                <input
                type='email'
                name='email'
                placeholder='email'
                />
            </div> <br/>

            <div> 
                <label>Password: </label> 
                <input
                type='password'
                name='password'
                placeholder='password'
                />
            </div> <br/>
            <div>
                <label>Re-write password: </label> 
                <input 
                type='password'
                name='password'
                placeholder='password'
                />
            </div> <br/>
            <div>
                  <label>Phone Number:</label> 
                  <input
                  type='phone number'
                  name='phone-number'
                  placeholder='phone-number'
                  
                  />
            </div>
            <button>Submit</button><hr/>
            <p>You already have an account? <Link to={'/signIn'}>Sign in here</Link></p>

        </div>

    )
}

export default SignUp