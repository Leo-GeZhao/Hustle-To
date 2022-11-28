import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as adminAPI from '../../utilities/api/sneakers'
export default function AdminProductDetailPage(){
    
    const [sneaker,setSneaker] = useState('')
    
    const {sneakerName} = useParams()
    
    const navigate = useNavigate();
    

    useEffect(function(){
        async function getSneaker(sneakerName){
          const sneaker = await adminAPI.getSneaker(sneakerName);
          console.log(sneaker)
          setSneaker(sneaker[0])
        }
        getSneaker(sneakerName);
      },[]);
    
    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            await adminAPI.deleteSneaker(sneakerName);
            setSneaker('')
            // navigate('/admin/product'); this is not working
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="card">
            <h2>Product Detail Page</h2>
            <div>{sneaker.name}</div>
            <div>{sneaker.price}</div>
            <div>{sneaker.size}</div>
            <div>{sneaker.description}</div>
            <button onClick={handleSubmit}>Delete</button>
        </div>
    )
}