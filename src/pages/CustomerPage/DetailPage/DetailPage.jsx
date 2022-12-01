/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as adminAPI from '../../../utilities/api/admin'

import "./DetailPage.css"
export default function DetailPage(){

    const [sneaker,setSneaker] = useState('')

    console.log(sneaker)
    
    const {sneakerName} = useParams()

    useEffect(function(){
        async function getSneaker(sneakerName){
          const sneaker = await adminAPI.getSneaker(sneakerName);
          setSneaker(...sneaker, sneaker)
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
                            {
                                sneaker.variant && (
                                    <p>${sneaker.variant[0].price}.00 CAD</p> 
                                )
                            }
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>SIZE</p>
                            {
                                sneaker.variant && (  
                                    <div className="size">{sneaker.variant[0].size}</div>
                                )
                            }
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
