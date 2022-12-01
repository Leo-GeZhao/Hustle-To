import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../../utilities/services/users';

import './LoginForm.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
    <h2>Login</h2>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className='d-flex flex-column justify-content-center align-items-center '>
                <label className='p-2'>Email</label>
                <input type="text" name="email" className='form-control' value={credentials.email} onChange={handleChange} required />
                <label className='p-2'>Password</label>
                <input type="password" name="password" className='form-control' value={credentials.password} onChange={handleChange} required />
                <button type="submit" className='btn btn-primary m-3'>LOG IN</button>
            </div>
          </form>
        <p className="error-message">&nbsp;{error}</p>
    </>
  );
}
