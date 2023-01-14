import { Link } from "react-router-dom";

export default function Product({ sneaker }) {
  return (
    <Link to={`/admin/product/${sneaker.name}`}>
      <div className="container-fluid text-center mt-5">
        <div className="row row-cols-6">
          <div className="card-body">
            <img src={`${sneaker.image}`} alt="" style={{ width: "100px" }} />
            <p className="card-title">{sneaker.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
