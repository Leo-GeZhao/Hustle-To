import { Link } from "react-router-dom";

export default function Product({ sneaker }) {
  return (
    <Link to={`/admin/product/${sneaker.name}`}>
      <div className="card col">
        <img src={`${sneaker.image}`} alt="" style={{ width: "100px" }} />
        <div className="card-body">
          <h5 className="card-title">{sneaker.name}</h5>
        </div>
      </div>
    </Link>
  );
}
