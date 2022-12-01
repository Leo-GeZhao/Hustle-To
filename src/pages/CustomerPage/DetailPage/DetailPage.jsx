/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as adminAPI from '../../../utilities/api/admin'

import "./DetailPage.css"
export default function DetailPage(){

    const [sneaker,setSneaker] = useState('')

    const [variant,setVariant] = useState([])
    
    const {sneakerName} = useParams()

    useEffect(function(){
        async function getSneaker(sneakerName){
          const sneaker = await adminAPI.getSneaker(sneakerName);
          setSneaker(...sneaker, sneaker[0])
          setVariant(...variant,sneaker[0].variant[0])
        }
         getSneaker(sneakerName)
      },[]);
    
    return (
            <>
                <hr />
                <div className="d-flex p-2 product-detail">
                    <div>
                        <img className="image"src={`${sneaker.image}`} alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-evenly align-items-center">
                        <div className="d-flex flex-column align-items-center">
                            <h5>{sneaker.brand}</h5>
                            <p>{sneaker.name}</p>
                            <p>${variant.price}.00 CAD</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>SIZE</p>
                            <div className="size">{variant.size}</div>
                        </div>
                        <div>
                            <p className="description-title">DESCRIPTION</p>
                            <div className="description">{sneaker.description}</div>
                        </div>
                    </div>
                </div>
            </>
            
    )
}
