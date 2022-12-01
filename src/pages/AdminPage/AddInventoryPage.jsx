import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import * as adminAPI from '../../utilities/api/admin'


import './AddAdmin.css'

const defaultState = {
    brand:'Adidas',
    name: '',
    sizeStr: '',
    description: '',
    image:'',
}

export default function AddInventoryPage() {
    const [formData, setFormData] = useState(defaultState)

    const {brand, name, sizeStr, description } = formData;

    // const size =[]

    const size = sizeStr.split(',')

    console.log(size)

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
            const data = new FormData()
            data.append("brand",brand)
            data.append("name",name)
            // data.append('variant[price]',parseInt(formData.price))
            data.append('size',size)
            data.append("description",description)
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
                <h2>Inventory</h2>
                <form className="form" onSubmit={handleSubmit} autoComplete="off" encType='multipart/form-data'>
                    <label htmlFor="brand">Brand</label>
                    <select name="brand" id="brand" value={brand} onChange={handleChange} required>
                        <option value={"Adidas"}>Adidas</option>
                        <option value={"Converse"}>Converse</option>
                        <option value={"Jordan"}>Jordan</option>
                        <option value={"Nike"}>Nike</option>
                        <option value={"Yeezy"}>Yeezy</option>
                    </select>

                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange} required/>

                    {/* <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" value={price} onChange={handleChange} required /> */}

                    <label htmlFor="sizeStr">Size</label>
                    <input type="text" name="sizeStr" id="size" value={sizeStr} onChange={handleChange} required />

                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={description} onChange={handleChange} required />

                    <input type="file" id="imageInput" name="image" accept="image/png, image/jepg, image/jpg, image/webp" onChange={handleUpload}/>

                    <input type="submit" value="Submit" className="btn btn-success" />
                </form>
            </div>
        </div>
    )
}