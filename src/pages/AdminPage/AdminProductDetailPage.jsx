import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as adminAPI from '../../utilities/api/sneakers'
export default function AdminProductDetailPage({sneaker,setSneakers}){
    const {sneakerName} = useParams()

    useEffect(function(){
        async function getSneaker(sneakerName){
          const sneaker = await adminAPI.getSneaker(sneakerName);
          console.log(sneaker)
          setSneakers(sneaker[0])
        }
        getSneaker(sneakerName);
      },[]);

    return (
        <div className="card">
            <div>Product Detail Page</div>
            <div>{sneaker.name}</div>
            <div>{sneaker.price}</div>
            <div>{sneaker.size}</div>
            <div>{sneaker.description}</div>
        </div>
    )
}