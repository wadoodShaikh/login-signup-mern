import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/register", {
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

  async function HandleAllUsers() {
    const response = await fetch("http://localhost:8000/", { method: "GET" });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      {/* <h1>Register Page</h1>
      <button onClick={HandleAllUsers}>Get All Users</button>
      <form method="post" action="/register" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input type="text" placeholder="Password" /> <br />
        <input
          type="text"
          placeholder="Confirm Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <p>
          <Link to="/login">Already have an Account?</Link>
        </p>
        <button type="submit">Submit </button>
      </form> */}
      <div className="form-container" id="register-form">
        <h2>Register</h2>
        <form method="post" action="/register" onSubmit={HandleSubmit}>
          <div className="input-group">
            <label for="register-username">Username</label>
            <input
              type="text"
              id="register-username"
              name="register-username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label for="register-password">Password</label>
            <input
              type="password"
              id="register-password"
              name="register-password"
              required
            />
          </div>
          <div className="input-group">
            <label for="register-confirm-password">Confirm Password</label>
            <input
              type="password"
              id="register-confirm-password"
              name="register-confirm-password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" id="show-login">
            Login here
          </Link>
        </p>
      </div>

      {/* Used to display all the users stored in DB in console */}
      {/* <button onClick={HandleAllUsers}>Display All Users (console)</button> */}
    </>
  );
};

export default Register;
