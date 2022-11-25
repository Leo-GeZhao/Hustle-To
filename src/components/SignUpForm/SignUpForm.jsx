import { useState } from 'react';
import { signUp } from '../../utilities/services/users'
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

    return <div className='SignUpForm'>
            <div className="form-container">
                <h2>Sign Up</h2>
                <form className="form" onSubmit={handleSubmit} autoComplete="off">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange} required/>

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={handleChange} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={handleChange} required />

                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" value={confirm} onChange={handleChange} required />

                    <button type="submit" disabled={disabled}>Sign up</button>
                </form>
            </div>
            {error && <p className="error-message">&nbsp;{error}</p>}
        </div>
}