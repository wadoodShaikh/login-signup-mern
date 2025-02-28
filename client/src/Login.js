import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    console.log(`Username: ${username}, Password: ${password}`);
  }

  return (
    <>
      {/* <h1>Login Page</h1>
      <form method="post" action="/login" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Confirm Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <p>
          <Link to="/register">Don't have an Account?</Link>
        </p>
        <button type="submit">Submit </button>
      </form> */}
      <div className="form-container" id="login-form">
        <h2>Login</h2>
        <form method="post" action="/login" onSubmit={HandleSubmit}>
          <div className="input-group">
            <label for="login-email">Username</label>
            <input
              type="text"
              id="login-email"
              name="login-email"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label for="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              name="login-password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? {"  "}
          <Link to="/register" id="show-register">
            Register here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
