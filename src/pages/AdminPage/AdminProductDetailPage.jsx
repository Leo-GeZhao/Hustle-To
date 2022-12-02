/* eslint-disable react-hooks/exhaustive-deps */
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
                <h2>Detail</h2>
                <div className="d-flex p-2 product-detail">
                    <div>
                        <img className="image"src={`${sneaker.image}`} alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-evenly align-items-center">
                        <div className="d-flex flex-column align-items-center">
                            <h5>{sneaker.brand}</h5>
                            <p>{sneaker.name}</p>
                            {
                                sneaker.variant && (
                                    <p>${sneaker.variant[0].price}.00 CAD</p> 
                                )
                            }
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>SIZE</p>
                            {
                                sneaker.variant && (  
                                    <div className="size">{sneaker.variant[0].size}</div>
                                )
                            }
                        </div>
                        <div>
                            <p className="description-title">DESCRIPTION</p>
                            <div className="description">{sneaker.description}</div>
                            <button onClick={handleDelete} className="btn btn-danger m-1">Delete</button>
                        </div>
                    </div>
                </div> 
                <hr />
                <div>
                    <h2>Edit Detail</h2>
                    <form className="form" onSubmit={handleEdit} autoComplete="off">
                        <div className="d-flex flex-column justify-content-evenly align-items-center">

                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" className="form-control" id="price" value={price} onChange={handleChange} required />

                            <label htmlFor="size">Size</label>
                            <input type="number" name="size" className="form-control" id="size" value={size} onChange={handleChange} required />

                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" className="form-control" id="description" value={description} onChange={handleChange} required />

                            <button type="submit" className="btn btn-success">Edit Product</button>
                            </div>
                        </form>
                </div>
            </div>
    )
}