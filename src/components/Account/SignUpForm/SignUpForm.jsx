import { useState } from "react";
import { useNavigate } from "react-router-dom";

//User Service
import { signUp } from "../../../utilities/services/users";

//Default State for User SignUp
const defaultState = {
  name: "",
  email: "",
  password: "",
  confirm: "",
  error: "",
};

export default function SignUpForm({ setUser, setUpdate }) {
  //Navigate to other Pages
  const navigate = useNavigate();

  const [formData, setFormData] = useState(defaultState);
  const { name, email, password, confirm, error } = formData;

  //Handle Change on SignUp Form
  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
      error: "",
    };
    setFormData(newFormData);
  };

  //Handle SignUp User
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, password, email } = formData;
      const data = { name, password, email };
      const user = await signUp(data);
      setUpdate(true);
      setUser(user);
      navigate("/");
    } catch (err) {
      setFormData({
        ...formData,
        error: "Sign up Failed - Try again!",
      });
    }
  };

  //Validations for SignUp Form
  const disabled =
    password !== confirm || !name || !email || !password || !confirm;

  return (
    <>
      <h2>Sign Up</h2>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <label htmlFor="name" className="p-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="p-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password" className="p-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirm" className="p-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm"
            className="form-control"
            id="confirm"
            value={confirm}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={disabled}
            className="btn btn-outline-dark m-3"
          >
            Sign up
          </button>
        </div>
      </form>

      {error && <p className="error-message">&nbsp;{error}</p>}
    </>
  );
}
