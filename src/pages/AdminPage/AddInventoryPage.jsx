import { useState, } from "react";
import { useNavigate, Link } from "react-router-dom";
import { insertSneaker } from "../../utilities/api/sneakers";


import './AddAdmin.css'

const defaultState = {
    name: '',
    price: '',
    size: '',
    description: '',
}

export default function AddInventoryPage() {
    const [formData, setFormData] = useState(defaultState)

    const { name, price, size, description } = formData;

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();

        try{
            const data = {name, price, size, description}

            const sneaker = await insertSneaker(data)
            navigate('/admin/product');
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Input Failed - Try again!'
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

    return <div className=''>
            <div className="">
                <h2>Inventory</h2>
                <form className="form" onSubmit={handleSubmit} autoComplete="off">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange} required/>

                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" value={price} onChange={handleChange} required />

                    <label htmlFor="size">Size</label>
                    <input type="number" name="size" id="size" value={size} onChange={handleChange} required />

                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={description} onChange={handleChange} required />

                    <button type="submit">Input Inventory</button>
                </form>
            </div>
        </div>
}