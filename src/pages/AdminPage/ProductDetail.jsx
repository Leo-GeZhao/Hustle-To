/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as adminAPI from "../../utilities/api/admin";

const defaultVariant = {
  size: "",
  price: "",
};

export default function ProductDetail({ setSneakers }) {
  const [sneaker, setSneaker] = useState("");
  const [update, setUpdate] = useState(false);
  const { sneakerName } = useParams();

  const navigate = useNavigate();

  const [description, setDescription] = useState("");

  const [variantData, setVariantData] = useState(defaultVariant);
  const { size, price } = variantData;
  const [hasVariant, setHasVariant] = useState(false);

  const [priceIdx, setPriceIdx] = useState(0);

  useEffect(
    function () {
      async function getSneaker(sneakerName) {
        const sneaker = await adminAPI.getSneaker(sneakerName);
        setSneaker(sneaker.data);
        sneaker.data.variant[0] ? setHasVariant(true) : setHasVariant(false);
      }
      getSneaker(sneakerName);
      setUpdate(false);
    },
    [update]
  );

  //Delete Sneaker
  const handleDelete = async (e) => {
    e.preventDefault();
    await adminAPI.deleteSneaker(sneakerName);
    navigate("admin/product");
  };

  //Edit Description
  const handleEdit = async (e) => {
    e.preventDefault();
    const data = { description };
    await adminAPI.editSneaker(sneakerName, data);
    setUpdate(true);
    setDescription("");
  };

  //Add Size

  const handleSize = (e) => {
    const newVariantData = {
      ...variantData,
      [e.target.name]: e.target.value,
    };
    setVariantData(newVariantData);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const data = { size, price };
    await adminAPI.addVariant(sneakerName, data);
    setUpdate(true);
    setVariantData(defaultVariant);
  };

  const changePrice = (e) => {
    setPriceIdx(e.target.id);
  };

  return (
    <div>
      <h2>Detail</h2>
      <div className="d-flex justify-content-evenly p-2">
        <div>
          <div>
            <img className="image" s src={`${sneaker.image}`} alt="" />
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ width: "500px" }}
        >
          <div className="d-flex flex-column justify-content-evenly align-items-center">
            <div className="d-flex flex-column align-items-center">
              <h5>{sneaker.brand}</h5>
              <p>{sneaker.name}</p>
              {hasVariant && <p>${sneaker.variant[priceIdx].price}.00 CAD</p>}
            </div>
            <div className="d-flex flex-column align-items-center">
              <p>SIZE</p>
              <div className="d-flex">
                {hasVariant &&
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
              <button onClick={handleDelete} className="btn btn-danger mt-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-row justify-content-around">
        <div>
          <h2>Edit Description</h2>
          <form className="form-group" onSubmit={handleEdit} autoComplete="off">
            <div className="d-flex flex-column justify-content-evenly align-items-center">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                className="form-control w-100 mt-2"
                rows="6"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-success m-3">
                Edit Product
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2>Add a Size</h2>
          <form className="form" onSubmit={handleAdd} autoComplete="off">
            <div className="d-flex flex-column justify-content-evenly align-items-center">
              <label htmlFor="size">Size</label>
              <input
                type="number"
                name="size"
                className="form-control"
                id=""
                value={size}
                onChange={handleSize}
              />
              <label htmlFor="price" className="mt-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                className="form-control"
                id=""
                value={price}
                onChange={handleSize}
              />
              <button type="submit" className="btn btn-success m-3">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
