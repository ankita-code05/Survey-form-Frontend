import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SignIn.css'


function Register() {
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/surveyItems')
  }
    return (
        <div className="abc">
            <div className='main-continer'>
            <div className='heading1'>
                <p className='text1'>Welcome Page<br /> One line text <br /> Will be here </p>
                <p className='text2'>Sign in to continue access pages</p>
                <p className='text3'>Don’t Have An Account?</p>
                
                <Link to="/register">
                <button className='register'>Register  </button></Link>
            </div>
            <div className='signin'>
                <form>
                    <h1>Sign In </h1>
                    <p className='text'>Sign in to continue access pages</p>
                    <div className="form-group">
                        <label className="label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="input-field" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='Password'>Password</label>
                        <input type='password' name='Password' required></input>
                    </div>
                    <div className='btn'>
                        <button onClick={handleSubmit}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register
