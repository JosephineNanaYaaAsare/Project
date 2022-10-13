import React, { useState } from "react";
import axios from "axios"
import { useRouter } from "next/router"


const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const router = useRouter()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { firstName, lastName, email, password, confirmPassword } = data;

    if (
      firstName == "" &&
      lastName == "" &&
      email == "" &&
      password == "" &&
      confirmPassword == ""
    ) {
      setError("Please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email");
      return
    }
    return;
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    }

    try{
          await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
        );
        router.push("/")
    } catch (error) {
        setError(error.message)
    }
  };

  return (
    <div>
      <h1>Register</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          "
        </div>
        <div>
          <label htmlFor="lasttName">lastName</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          "
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
          "
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
          "
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
