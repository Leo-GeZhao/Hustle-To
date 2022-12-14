import { useState } from "react";
import Banners from "../../components/Banners/Banners";
import * as adminAPI from '../../utilities/api/admin'

import './AddAdmin.css'


export default function Banner({banners, setBanners}){

    const defaultState = {
        name:'',
        image:'',
    } 

    const [formData, setFormData] = useState(defaultState)
    
    

   function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
    
   }

    function handleUpload(e){
        const file = e.target.files[0]
        // setFile(URL.createObjectURL(file))
        setFormData({...formData, image:file})
        // console.log(banner.image)
   }

   async function handleSubmit(e){
    e.preventDefault();
    const data = new FormData()
    data.append("image",formData.image)
    data.append("name",formData.name)
    await adminAPI.createBanner(data)
   }


    return (
        <>
            <h2>Create A Banner</h2>
                <form className="form" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control m-2" name="name" id="name" value={formData.name} onChange={handleChange} required/>
                        <br />
                        <input type="file" className="form-control m-2" name="image" accept="image/png, image/jepg, image/jpg, image/webp" onChange={handleUpload}/>
                        <input type="submit" value="Submit" className="btn btn-success m-3" />
                    </div>
                </form>
                <div>
                    <h2>Banners</h2>
                    <hr />
                    {banners.map((b)=><Banners banner={b} setBanners={setBanners}/>)}
                </div>
        </>
        
    )
}