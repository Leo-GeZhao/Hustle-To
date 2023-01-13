import { Link } from "react-router-dom";

export default function Product({ sneaker }) {
  return (
    <Link to={`/admin/product/${sneaker.name}`}>
      <div className="card col">
        <img src={`${sneaker.image}`} className="adminImg" alt="" />
        <div className="card-body">
          <h5 className="card-title">{sneaker.name}</h5>
          {/* {sneaker.variant && <h5>Size: {sneaker.variant[0].size}</h5>} */}
        </div>
      </div>
    </Link>
  );
}
