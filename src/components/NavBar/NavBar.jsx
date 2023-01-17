import { Link } from "react-router-dom";
import * as userService from "../../utilities/services/users";

import "./NavBar.css";

export default function NavBar({ user, setUser, cart }) {
  function handleLogOut() {
    userService.logout();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HustleTo
        </Link>
        <div className="justify-content-end">
          {user ? (
            <>
              {user.email === process.env.REACT_APP_ADMIN ? (
                <>
                  <Link to="/admin/product">Inventory</Link>
                  <Link to="/admin/addinventory">Add Inventory</Link>
                  <Link to="/admin/banner">Banner</Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link to="/cart">
                    <span className="me-3">
                      Cart
                      {cart && !!cart.orderDetail.length && (
                        <span className="position-absolute top-30 start-10 translate-middle badge rounded-circle text-bg-dark ms-2">
                          {cart.orderDetail.length}
                        </span>
                      )}
                    </span>
                  </Link>
                  <Link to="/orders">
                    <span className="me-3">Order History</span>
                  </Link>
                </>
              )}

              <Link to="" onClick={handleLogOut}>
                <span>Log Out</span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/createaccount">Create Account</Link>
              <Link to="/login">Log In</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
