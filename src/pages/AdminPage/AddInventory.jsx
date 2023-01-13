import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as adminAPI from "../../utilities/api/admin";

const defaultState = {
  brand: "Adidas",
  name: "",
  description: "",
  image: "",
};

export default function AddInventory({ sneakers, setSneakers }) {
  const [formData, setFormData] = useState(defaultState);

  const { brand, name, description } = formData;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("brand", brand);
    data.append("name", name);
    data.append("description", description);
    data.append("image", formData.image);
    await adminAPI.createSneaker(data);
    // const allSneakers = await adminAPI.getSneakers();
    // setSneakers(allSneakers);
    navigate("/admin/product");
  };

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value,
    };
    setFormData(newFormData);
  }

  function handleUpload(e) {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  }

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
