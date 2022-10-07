import React, { useState } from "react";
import { signin } from "next-auth/react";
import { useRouter } from "next/router";

const login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("")
  const router = useRouter

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signin("credentials", {
      //...data,
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/"
    });

    console.log(result)

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <div>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default login;
