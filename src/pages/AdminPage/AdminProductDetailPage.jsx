import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as adminAPI from '../../utilities/api/admin'

const defaultState = {
    price: '',
    size: '',
    description: '',
}

export default function AdminProductDetailPage(){

    
    const [sneaker,setSneaker] = useState('')
    
    const {sneakerName} = useParams()
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState(defaultState)

    const { price, size, description } = formData;
    
    //Delete
    useEffect(function(){
        async function getSneaker(sneakerName){
          const sneaker = await adminAPI.getSneaker(sneakerName);
          console.log(sneaker)
          setSneaker(...sneaker, sneaker[0])
        }
        getSneaker(sneakerName);
      },[]);
    
    async function handleDelete(evt){
        evt.preventDefault()
        try {
            await adminAPI.deleteSneaker(sneakerName);
            setSneaker(...sneaker,'')
            // navigate('/admin/product'); this is not working
        }catch(err){
            console.log(err)
        }
    }

    //Edit
    const handleEdit = async (e) =>{
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();

        try{
            const data = { price, size, description}

            const sneaker = await adminAPI.editSneaker(sneakerName,data)
            console.log(sneaker)
            setSneaker(...sneaker, sneaker[0])

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

    return (
        <div>
            <div className="card">
                <h2>Product Detail Page</h2>
                <div>{sneaker.name}</div>
                <div>{sneaker.price}</div>
                <div>{sneaker.size}</div>
                <div>{sneaker.description}</div>
                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
            </div>
            <div>
            <h2>Edit Product</h2>
            <form className="form" onSubmit={handleEdit} autoComplete="off">

                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" value={price} onChange={handleChange} required />

                    <label htmlFor="size">Size</label>
                    <input type="number" name="size" id="size" value={size} onChange={handleChange} required />

                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={description} onChange={handleChange} required />

                    <button type="submit" className="btn btn-success">Edit Product</button>
                </form>
            </div>
        </div>
    )
}