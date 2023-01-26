//Components
import Product from "../../components/Admin/AdminProduct";

export default function AdminPage({ user, sneakers }) {
  return (
    <div>
      <h2>Hello, {user.name}</h2>
      <h5>Inventory List</h5>
      <div>
        <div className="container-fluid text-center">
          <div className="row row-cols-6">
            {sneakers.map((s) => (
              <Product sneaker={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
