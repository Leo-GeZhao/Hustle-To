import { useState } from 'react';
import { signUp } from '../../../utilities/services/users'
import { useNavigate } from 'react-router-dom';

import './SignUpForm.css'


const defaultState = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
}

export default function SignUpForm({setUser}){
    const [formData, setFormData] = useState(defaultState)

    const { name, email, password, confirm, error } = formData;

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();

        try{
            const { name, password, email } = formData;
            const data = {name, password, email}

            const user = await signUp(data)
            setUser(user);
            navigate('/');
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Sign up Failed - Try again!'
            })
        }
    }

    function handleChange(evt) {
        // Replace with new object and use a computed property
        // to update the correct property
        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
            error: '' // clear any old errors as soon as the user interacts with the form
        };
        setFormData(newFormData);
    }

    const disabled = (password !== confirm) || !name || !email || !password || !confirm

    return (
        <>
                <h2>Sign Up</h2>
                <form className="form" onSubmit={handleSubmit} autoComplete="off">
                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <label htmlFor="name" className='p-2'>Name</label>
                        <input type="text" name="name" className='form-control' id="name" value={name} onChange={handleChange} required/>

                        <label htmlFor="email" className='p-2'>Email</label>
                        <input type="text" name="email" className='form-control' id="email" value={email} onChange={handleChange} required />

                        <label htmlFor="password" className='p-2'>Password</label>
                        <input type="password" name="password" className='form-control' id="password" value={password} onChange={handleChange} required />

                        <label htmlFor="confirm" className='p-2'>Confirm Password</label>
                        <input type="password" name="confirm" className='form-control' id="confirm" value={confirm} onChange={handleChange} required />

                        <button type="submit" disabled={disabled} className="btn btn-primary m-3">Sign up</button>
                    </div>
                </form>
                
            {error && <p className="error-message">&nbsp;{error}</p>}
        </>
    )
}