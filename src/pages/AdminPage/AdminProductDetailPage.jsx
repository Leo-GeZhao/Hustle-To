import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as adminAPI from '../../utilities/api/sneakers'
export default function AdminProductDetailPage(){
    
    const [sneaker,setSneaker] = useState('')
    
    const {sneakerName} = useParams()
    

    useEffect(function(){
        async function getSneaker(sneakerName){
          const sneaker = await adminAPI.getSneaker(sneakerName);
          console.log(sneaker)
          setSneaker(sneaker[0])
        }
        getSneaker(sneakerName);
      },[]);
    

    return (
        <div className="card">
            <h2>Product Detail Page</h2>
            <div>{sneaker.name}</div>
            <div>{sneaker.price}</div>
            <div>{sneaker.size}</div>
            <div>{sneaker.description}</div>
        </div>
    )
}