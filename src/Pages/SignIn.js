import react from 'react'
import {Link} from 'react-router-dom'

function SignIn () {
    return (
        <div>
            <h1>Login</h1> <br/>

            <div>
                <label>Email</label> <br/>
                <input
                type='email'
                name='email'
                placeholder='email'
                />
            </div> <br/>

            <div> 
                <label>Password</label> <br/>
                <input
                type='password'
                name='password'
                placeholder='password'
                />
            </div>
            <button>Submit</button> <hr/>
            <p>You dont have an account? <Link to={'/signUp'}>Register</Link></p>

        </div>

    )
}

export default SignIn