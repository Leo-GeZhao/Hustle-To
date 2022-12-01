import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import * as adminAPI from '../../utilities/api/admin'


import './AddAdmin.css'

const defaultState = {
    brand:'',
    name: '',
    price: '',
    size: '',
    description: '',
    image:'',
}

export default function AddInventoryPage() {
    const [formData, setFormData] = useState(defaultState)

    const {brand, name, price, size, description } = formData;

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
            const data = new FormData()
            data.append("brand",formData.brand)
            data.append("name",formData.name)
            data.append('variant[price]',parseInt(formData.price))
            data.append('variant[size]',parseInt(formData.size))
            data.append("description",formData.description)
            data.append("image",formData.image)
            const sneaker = await adminAPI.createSneaker(data)
            console.log(sneaker)
            navigate('/admin/product');
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

    function handleUpload(e){
        const file = e.target.files[0]
        // setFile(URL.createObjectURL(file))
        setFormData({...formData, image:file})
   }

    return (

    <div className=''>
            <div className="">
                <h2>Inventory Information</h2>
                <form className="form" onSubmit={handleSubmit} autoComplete="off" encType='multipart/form-data'>
                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <label htmlFor="brand">Brand</label>
                        <select name="brand" id="brand" className="form-control m-2" value={brand} onChange={handleChange} required>
                            <option value={"Adidas"}>Adidas</option>
                            <option value={"Converse"}>Converse</option>
                            <option value={"Jordan"}>Jordan</option>
                            <option value={"Nike"}>Nike</option>
                            <option value={"Yeezy"}>Yeezy</option>
                        </select>

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"  id="name" className="form-control m-2" value={name} onChange={handleChange} required/>

                        <label htmlFor="size">Size</label>
                        <input type="number" name="size" className="form-control m-2" id="size" value={size} onChange={handleChange} required />
                        
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" className="form-control m-2" id="price" value={price} onChange={handleChange} required />

                        <label htmlFor="description">Description</label>
                        <input type="text-area" name="description" id="description" className="form-control m-2" value={description} onChange={handleChange} required /> 

                        <input type="file" id="imageInput" className="form-control m-2" name="image" accept="image/png, image/jepg, image/jpg, image/webp" onChange={handleUpload}/>

                        <input type="submit" value="Submit" className="btn btn-success m-3" />
                    </div>
                </form>
            </div>
        </div>
    )
}