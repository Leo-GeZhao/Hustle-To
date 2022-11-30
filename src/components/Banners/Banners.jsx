import * as adminAPI from '../../utilities/api/admin'
import './Banners.css'
export default function Banners({banner, setBanners}){
    
    async function handleDelete(evt){
        evt.preventDefault()
        const id = banner._id
        console.log(id)
        try {
            await adminAPI.deleteBanner(id);
            setBanners(...banner,'')
            
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            {banner.name}
            <img className="adminBanner"src={`${banner.image}`} alt="" />
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
    )
} 