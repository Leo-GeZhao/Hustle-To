import { Link } from "react-router-dom";
import * as userService from "../../utilities/services/users";

import "./NavBar.css";

export default function NavBar({ user, setUser }) {
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
                <></>
              )}
              <Link to="/cart">Cart</Link>
              <Link to="" onClick={handleLogOut}>
                Log Out
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
