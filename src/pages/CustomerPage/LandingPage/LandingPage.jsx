import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../../components/Front/Banners/Banner";
import Sneaker from "../../../components/Front/Sneakers/Sneaker";
import * as inventoryAPI from "../../../utilities/api/inventory";
import "./LandingPage.css";

export default function LandingPage({ sneakers, banners }) {
  const [newArrivals, setNewArrivals] = useState([]);
  const [jordan, setJordan] = useState([]);
  const [yeezy, setYeezy] = useState([]);
  const [allInventory, setAllInventory] = useState([]);
  useEffect(function () {
    async function getInventory() {
      const newArrivals = await inventoryAPI.getbrand({
        brand: "NEW-ARRIVALS",
      });
      setNewArrivals(newArrivals.data);
      const jordanInventory = await inventoryAPI.getbrand({ brand: "jordan" });
      setJordan(jordanInventory.data);
      const yeezyInventory = await inventoryAPI.getbrand({ brand: "yeezy" });
      setYeezy(yeezyInventory.data);
      const allInventory = await inventoryAPI.getbrand({ brand: "ALL" });
      setAllInventory(allInventory.data);
    }
    getInventory();
  }, []);
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {banners.map((b, idx) => (
            <Banner banner={b} key={idx} />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="Footware">
        <div className="container-fluid text-center mt-5">
          <h5>NEW ARRIVALS</h5>
          <div className="row row-cols-6">
            {newArrivals.map((s, idx) => (
              <Sneaker sneaker={s} key={idx} />
            ))}
          </div>
          <Link to={`/NEW-ARRIVALS`}>
            <button className="btn btn-dark">VIEW ALL</button>
          </Link>
          <div className="container-fluid text-center mt-5">
            <h5>AIR JORDAN</h5>
            <div className="row row-cols-6">
              {jordan.map((s, idx) => (
                <Sneaker sneaker={s} key={idx} />
              ))}
            </div>
            <Link to={`/JORDAN`}>
              <button className="btn btn-dark">VIEW ALL</button>
            </Link>
          </div>
          <div className="container-fluid text-center mt-5">
            <h5>YEEZY</h5>
            <div className="row row-cols-6">
              {yeezy.map((s, idx) => (
                <Sneaker sneaker={s} key={idx} />
              ))}
            </div>
            <Link to={`/YEEZY`}>
              <button className="btn btn-dark">VIEW ALL</button>
            </Link>
          </div>
          <div className="container-fluid text-center mt-5">
            <h5>ALL PRODUCTS</h5>
            <div className="row row-cols-6">
              {allInventory.map((s, idx) => (
                <Sneaker sneaker={s} key={idx} />
              ))}
            </div>
            <Link to={`/ALL`}>
              <button className="btn btn-dark">VIEW ALL</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
