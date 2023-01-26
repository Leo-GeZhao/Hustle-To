//Components
import Product from "../../components/Admin/Product";

//This is Admin Side Sneaker List
export default function Inventory({ user, sneakers, setUpdate }) {
  return (
    <div>
      <h2>Hello, {user.name}</h2>
      <h5>Inventory List</h5>
      <div>
        <div className="container-fluid text-center">
          <div className="row row-cols-6">
            {sneakers.map((s) => (
              <Product sneaker={s} setUpdate={setUpdate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
