import { useState } from "react";

//Components
import Banners from "../../components/Banners/Banners";

//Admin API
import * as adminAPI from "../../utilities/api/admin";

//Default FormData
const defaultState = {
  name: "",
  image: "",
};

export default function Banner({ banners, setBanners, update, setUpdate }) {
  const [formData, setFormData] = useState(defaultState);
  const { name, image } = formData;

  //Handle Name Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Handle FIle/Img Change
  const handleUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  //Handle Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("name", name);
    await adminAPI.createBanner(data);
    setUpdate(true);
    setFormData(defaultState);
  };

  return (
    <>
      <h2>Create A Banner</h2>
      <form
        className="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            className="form-control mb-4"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            className="form-control"
            name="image"
            accept="image/png, image/jepg, image/jpg, image/webp"
            onChange={handleUpload}
          />
          <input type="submit" value="Submit" className="btn btn-success m-3" />
        </div>
      </form>
      <div>
        <h2>Banners</h2>
        <hr />
        {banners.map((b) => (
          <Banners banner={b} setUpdate={setUpdate} />
        ))}
      </div>
    </>
  );
}
