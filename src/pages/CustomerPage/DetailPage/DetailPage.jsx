/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as InventoryAPI from "../../../utilities/api/inventory";
import Sneaker from "../../../components/Front/Sneakers/Sneaker";

import "./DetailPage.css";
export default function DetailPage() {
  const [sneaker, setSneaker] = useState("");
  const [related, setRelated] = useState([]);
  const [priceIdx, setPriceIdx] = useState(0);

  const { sneakerName } = useParams();

  useEffect(
    function () {
      async function getSneaker(sneakerName) {
        const sneaker = await InventoryAPI.getSneaker(sneakerName);
        setSneaker(sneaker.data);

        const data = { brand: sneaker.data.brand };
        const related = await InventoryAPI.getRelated(data);
        setRelated(related.data);
      }

      getSneaker(sneakerName);
    },
    [sneakerName]
  );

  //size-price association
  function changePrice(e) {
    setPriceIdx(e.target.id);
  }

  return (
    <>
      <div className="d-flex p-2 justify-content-evenly">
        <div>
          <img className="image" src={`${sneaker.image}`} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-evenly align-items-center">
          <div className="d-flex flex-column align-items-center">
            <h5>{sneaker.brand}</h5>
            <p>{sneaker.name}</p>
            {sneaker.variant && (
              <p>${sneaker.variant[priceIdx].price}.00 CAD</p>
            )}
          </div>
          <div className="d-flex flex-column align-items-center">
            <p>SIZE</p>
            <div className="d-flex">
              {sneaker.variant &&
                sneaker.variant.map((v, index) => (
                  <button
                    className="px-3 mx-2 btn btn-outline-dark"
                    id={index}
                    onClick={changePrice}
                  >
                    {v.size}
                  </button>
                ))}
            </div>
          </div>
          <div>
            <p className="description-title">DESCRIPTION</p>
            <div className="description">{sneaker.description}</div>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <h5>RELATED PRODUCT</h5>
        <div className="row row-cols-6">
          {related.map((s, idx) => (
            <Sneaker sneaker={s} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
