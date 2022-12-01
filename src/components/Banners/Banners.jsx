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
            <div className='d-flex flex-row mb-3 justify-content-around align-items-center'>
                <div>
                    <img className="card-img-top" src={`${banner.image}`} alt="" />
                </div>
                <div className='d-flex flex-column mb-3 justify-content-center align-items-center'>
                    {banner.name}
                    <button onClick={handleDelete} className="btn btn-danger text-center">Delete</button>
                </div>
                
            </div>
    )
} 