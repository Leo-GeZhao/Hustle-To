/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as adminAPI from '../../utilities/api/admin'

const defaultState = {
    description: '',
}

const defaultVariant = {
    size:"",
    price:"",
}



export default function AdminProductDetailPage({setSneakers}){

    
    const [sneaker,setSneaker] = useState('')
    
    const {sneakerName} = useParams()
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState(defaultState)
    const { description } = formData;

    const [variantData, setVariantData] = useState(defaultVariant)
    const {size,price} = variantData

    const [priceIdx, setPriceIdx] = useState(0)


    useEffect(function(){
        async function getSneaker(sneakerName){
          const sneaker = await adminAPI.getSneaker(sneakerName);
          setSneaker(...sneaker, sneaker[0])
        }
        getSneaker(sneakerName);
      },[]);

    //Delete
    async function handleDelete(evt){
        evt.preventDefault()
        await adminAPI.deleteSneaker(sneakerName);
        const allSneakers = await adminAPI.getSneakers();
        setSneaker(allSneakers)
        // navigate(-1)
    }

    //Edit
    const handleEdit = async (e) =>{
        // e.preventDefault();

        try{
            const data = { description }

            const sneaker = await adminAPI.editSneaker(sneakerName,data)
            setSneaker(...sneaker, sneaker[0])
        }catch (err) {
            setFormData({
                ...formData,
                error: 'Input Failed - Try again!'
            })
        }
    }

    function handleDescription(evt) {
        // Replace with new object and use a computed property
        // to update the correct property
        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
            error: '' // clear any old errors as soon as the user interacts with the form
        };
        setFormData(newFormData);
    }

    //Add Size

    function handleSize(e){
        const newVariantData = {
            ...variantData,
            [e.target.name] : e.target.value
        };
        setVariantData(newVariantData)
    }

    async function handleAdd(e){
        const data = {size, price}
        await adminAPI.addVariant(sneakerName,data)
    }

    function changePrice(e){
        setPriceIdx(e.target.id)
    }

    
    
    return (
            <div>
                <h2>Detail</h2>
                <div className="d-flex justify-content-evenly p-2">
                    <div>
                        <div>
                            <img className="image"s src={`${sneaker.image}`} alt="" />
                        </div>
                    </div>
                    <div className="product-detail d-flex justify-content-center">
                        <div className="d-flex flex-column justify-content-evenly align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <h5>{sneaker.brand}</h5>
                                <p>{sneaker.name}</p>
                                {
                                    sneaker.variant && ( 
                                        <p>${sneaker.variant[priceIdx].price}.00 CAD</p>
                                    )
                                }
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <p>SIZE</p>
                                <div className="d-flex">
                                {
                                    sneaker.variant && (  
                                        sneaker.variant.map((v, index)=> <button className="px-3 mx-2 btn btn-outline-dark" id={index} onClick={changePrice}>{v.size}</button>)
                                    )
                                }
                                </div>
                            </div>
                            <div>
                                <p className="description-title">DESCRIPTION</p>
                                <div className="description">{sneaker.description}</div>
                                <button onClick={handleDelete} className="btn btn-danger mt-2">Delete</button>
                            </div>
                        </div>
                    </div>
                </div> 
                <hr />
                <div className="d-flex flex-row justify-content-around">
                    <div>
                        <h2>Edit Description</h2>
                        <form className="form-group" onSubmit={handleEdit} autoComplete="off">
                            <div className="d-flex flex-column justify-content-evenly align-items-center">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" className="form-control w-100 mt-2" rows="6" id="description" value={description} onChange={handleDescription} required />
                                <button type="submit" className="btn btn-success m-3">Edit Product</button>
                                </div>
                        </form>
                    </div>
                    <div>
                        <h2>Add a Size</h2>
                        <form className="form" onSubmit={handleAdd} autoComplete="off">
                            <div className="d-flex flex-column justify-content-evenly align-items-center">
                                <label htmlFor="size">Size</label>
                                <input type="number" name="size" className="form-control" id="" value={size} onChange={handleSize}/>
                                <label htmlFor="price" className="mt-2">Price</label>
                                <input type="number" name="price" className="form-control" id="" value={price} onChange={handleSize}/>
                                <button type="submit" className="btn btn-success m-3">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}
