import { Link } from "react-router-dom";
import "./Sneakers.css";

export default function Sneaker({ sneaker }) {
  return (
    <Link to={`/product/${sneaker.name}`}>
      <div className="card col">
        <img src={`${sneaker.image}`} alt="" />
        <div className="card-body">
          <h5 className="card-title">{sneaker.name}</h5>
        </div>
      </div>
    </Link>
  );
}
