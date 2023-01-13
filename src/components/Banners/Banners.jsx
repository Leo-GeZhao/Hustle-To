import * as adminAPI from "../../utilities/api/admin";
import "./Banners.css";
export default function Banners({ banner, setBanners, update, setUpdate }) {
  async function handleDelete(e) {
    e.preventDefault();
    const data = { id: banner._id };
    await adminAPI.deleteBanner(data);
    setUpdate(true);
  }

  return (
    <div className="d-flex flex-row mb-3 justify-content-around align-items-center">
      <div>
        <img className="card-img-top" src={`${banner.image}`} alt="" />
      </div>
      <div className="d-flex flex-column mb-3 justify-content-center align-items-center">
        {banner.name}
        <button
          onClick={handleDelete}
          className="btn btn-danger text-center m-3"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
