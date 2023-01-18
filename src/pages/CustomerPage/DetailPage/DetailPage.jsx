/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as inventoryAPI from "../../../utilities/api/inventory";
import * as cartAPI from "../../../utilities/api/cart";
import Sneaker from "../../../components/Front/Sneakers/Sneaker";

import "./DetailPage.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";
export default function DetailPage({ user, setUpdate }) {
  const [sneaker, setSneaker] = useState("");
  const [related, setRelated] = useState([]);
  const [size, setSize] = useState(null);

  const [variant, setVariant] = useState(null);
  const [priceIdx, setPriceIdx] = useState(0);

  const { sneakerName } = useParams();

  useEffect(
    function () {
      async function getSneaker(sneakerName) {
        const sneaker = await inventoryAPI.getSneaker(sneakerName);
        setSneaker(sneaker.data);

        const data = { brand: sneaker.data.brand, name: sneakerName };
        const related = await inventoryAPI.getRelated(data);
        setRelated(related.data);
      }

      getSneaker(sneakerName);
    },
    [sneakerName]
  );

  //size-price association
  const changePrice = (e) => {
    setPriceIdx(e.target.id);
    setVariant(sneaker.variant[e.target.id]);
    setSize(e.target.textContent);
  };

  //Add Cart
  const handleAddCart = async (e) => {
    const data = {
      user: user._id,
      brand: sneaker.brand,
      name: sneaker.name,
      size: variant.size,
      price: variant.price,
      image: sneaker.image,
    };

    await cartAPI.addToCart(data);
    setUpdate(true);
  };

  return (
    <>
      <div className="d-flex mt-3 p-2 justify-content-evenly">
        <div>
          <img className="image" src={`${sneaker.image}`} alt="" />
        </div>
        <div
          className="d-flex flex-column justify-content-evenly align-items-center"
          style={{ width: "500px" }}
        >
          <div className="d-flex flex-column align-items-center">
            <h5>{sneaker.brand}</h5>
            <p>{sneaker.name}</p>
            {sneaker.variant && (
              <p>${sneaker.variant[priceIdx].price}.00 CAD</p>
            )}
          </div>
          <div className="d-flex flex-column align-items-center">
            <p>SIZE {size && `| ${size}`} </p>
            <div className="d-flex">
              {sneaker.variant &&
                sneaker.variant
                  .sort((s1, s2) =>
                    s1.size > s2.size ? 1 : s1.size < s2.size ? -1 : 0
                  )
                  .map((v, index) => (
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
          <button
            type="button"
            className="btn btn-outline-dark m-4 w-100"
            disabled={!user}
          >
            <div className="pt-3 ">
              {sneaker.variant && (
                <p>
                  ADD TO CART | ${sneaker.variant[priceIdx].price}
                  .00 CAD
                </p>
              )}
            </div>
          </button>
          <div>
            <p className="description-title">DESCRIPTION</p>
            <div className="description">{sneaker.description}</div>
          </div>
          <div>
            <p className="mt-3">100% AUTHENTICITY GUARANTEED</p>
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
