import { Link } from 'react-router-dom';
import * as userService from '../../utilities/services/users'

export default function NavBar({user, setUser}) {

  function handleLogOut(){
    userService.logout();
    setUser(null);
  }
  return (
    
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">HustleTo</Link>
        <div className='justify-content-end'>
          {
            user ? 
              <>
                <span className="name">Hello, {user.name}</span>
                {
                  user.email===process.env.REACT_APP_ADMIN ?
                    <Link to="/admin">Admin</Link>
                    :
                    <></>
                }
                <Link to="" onClick={handleLogOut}>Log Out</Link>
              </>
            :
              <>
                <Link to="/createaccount">Create Account</Link>
                <Link to="/login">Log In</Link>
              </>
          }
          </div>
      </div>
    </nav>
  );
}