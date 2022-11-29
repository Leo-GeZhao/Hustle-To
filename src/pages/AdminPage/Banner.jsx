import { useState } from "react";
import * as adminAPI from '../../utilities/api/admin'



export default function Banner(){

    const defaultState = {
        name:'',
        image:'',
    } 

    const [banner, setBanner] = useState(defaultState)
    
    

   function handleChange(e){
    setBanner({...banner, [e.target.name]:e.target.value})
    
   }

    function handleUpload(e){
        const file = e.target.files[0]
        // setFile(URL.createObjectURL(file))
        setBanner({...banner, image:file})
        // console.log(banner.image)
   }

   async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData()
    formData.append("image",banner.image)
    formData.append("name",banner.name)
    console.log(Object.fromEntries(formData))
    const uploadBanner = await adminAPI.createBanner(formData)
    console.log(uploadBanner)
   }


    return (
        <div>
            <form className="form" onSubmit={handleSubmit} encType='multipart/form-data'>
                <h2>Banner Page</h2>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={banner.name} onChange={handleChange} required/>
                <br />
                <input type="file" id="imageInput" name="image" accept="image/png, image/jepg, image/jpg, image/webp" onChange={handleUpload}/>
                <input type="submit" value="Submit" className="btn btn-success" />
            </form>
            <div>

            </div>
        </div>
    )
}