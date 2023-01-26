import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import Sneaker from "../Front/Sneakers/Sneaker";

//Inventory API
import * as inventoryAPI from "../../utilities/api/inventory";

//This is for Customer Size Showing Sneaker List based on Brand
const Product = () => {
  //Get Brand Name from URL
  const { brand } = useParams();
  const [inventory, setInventory] = useState(null);

  //Get Inventories based on Sneaker Brand
  useEffect(function () {
    const getSneakers = async () => {
      const inventory = await inventoryAPI.getbrand({ brand: brand });
      setInventory(inventory.data);
    };
    getSneakers();
  }, []);

  return (
    <>
      {inventory && (
        <div className="text-center">
          <h5>{brand}</h5>
          <div className="row row-cols-6">
            {inventory.map((s, idx) => (
              <Sneaker sneaker={s} key={idx} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
