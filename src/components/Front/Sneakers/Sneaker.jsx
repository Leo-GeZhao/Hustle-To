import { Link } from "react-router-dom";

import "./Sneakers.css";

export default function Sneaker({ sneaker }) {
  //Find the Lowest Price among Single Sneaker' Variant
  const lowestPrice = Math.min(...sneaker.variant.map((s) => s.price));

  return (
    <Link to={`/product/${sneaker.name}`}>
      <div className="card col">
        <img src={`${sneaker.image}`} alt="" />
        <div className="card-body">
          <h5 className="card-title">{sneaker.name}</h5>
          <h5 className="card-title">From: {lowestPrice}.00 CAD</h5>
        </div>
      </div>
    </Link>
  );
}
