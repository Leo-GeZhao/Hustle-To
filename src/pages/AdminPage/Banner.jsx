import { useState } from "react";
import * as adminAPI from '../../utilities/api/admin'



export default function Banner(){

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
    console.log(Object.fromEntries(data))
    const uploadBanner = await adminAPI.createBanner(data)
    console.log(uploadBanner)
   }


    return (
        <div>
            <form className="form" onSubmit={handleSubmit} encType='multipart/form-data'>
                <h2>Banner Page</h2>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required/>
                <br />
                <input type="file" id="imageInput" name="image" accept="image/png, image/jepg, image/jpg, image/webp" onChange={handleUpload}/>
                <input type="submit" value="Submit" className="btn btn-success" />
            </form>
            <div>

            </div>
        </div>
    )
}