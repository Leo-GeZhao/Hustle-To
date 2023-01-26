import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Admin API
import * as adminAPI from "../../utilities/api/admin";

//Default State for Inventory
const defaultState = {
  brand: "Adidas",
  name: "",
  description: "",
  image: "",
};

export default function AddInventory({ sneakers, setSneakers, setUpdate }) {
  //Navigate to other Pages
  const navigate = useNavigate();

  const [formData, setFormData] = useState(defaultState);
  const { brand, name, description } = formData;

  //Handle Change on Sneaker State
  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  //Handle Change on Sneaker File/Img
  const handleUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  //Handle Add New Sneaker
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("brand", brand);
    data.append("name", name);
    data.append("description", description);
    data.append("image", formData.image);
    await adminAPI.createSneaker(data);
    setUpdate(true);
    navigate("/admin/product");
  };

  return (
    <div className="">
      <div className="">
        <h2>Inventory Information</h2>
        <form
          className="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          encType="multipart/form-data"
        >
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <label htmlFor="brand">Brand</label>
            <select
              name="brand"
              id="brand"
              className="form-control m-2"
              value={brand}
              onChange={handleChange}
              required
            >
              <option value={"Adidas"}>Adidas</option>
              <option value={"Converse"}>Converse</option>
              <option value={"Jordan"}>Jordan</option>
              <option value={"Nike"}>Nike</option>
              <option value={"Yeezy"}>Yeezy</option>
            </select>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control m-2"
              value={name}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">Description</label>
            <input
              type="text-area"
              name="description"
              id="description"
              className="form-control m-2"
              value={description}
              onChange={handleChange}
              required
            />

            <input
              type="file"
              id="imageInput"
              className="form-control m-2"
              name="image"
              accept="image/png, image/jepg, image/jpg, image/webp"
              onChange={handleUpload}
            />

            <input
              type="submit"
              value="Submit"
              className="btn btn-success m-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
