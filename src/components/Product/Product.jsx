import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as inventoryAPI from "../../utilities/api/inventory";
import Sneaker from "../Front/Sneakers/Sneaker";

const Product = () => {
  const { brand } = useParams();
  const [inventory, setInventory] = useState(null);

  useEffect(function () {
    async function getSneakers() {
      const inventory = await inventoryAPI.getbrand({ brand: brand });
      setInventory(inventory.data);
    }
    getSneakers();
  }, []);

  console.log(brand);
  console.log(inventory);
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
