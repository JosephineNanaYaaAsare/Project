import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router"

const AddTransact = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState("")
  const router = useRouter()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.transact(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/transact`,
            {
                data
            }
        );
        router.push("/transact")
    } catch (error) {
        setError(error.message);
    }
  };

  return (
    <div>
      <h3>AddTransaction</h3>
      <form>
        <div>
          <label htmlFor="Title"></label>
          <input
            type="text"
            name="title"
            id="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Body"></label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={data.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <buton type="submit"> Add Transaction</buton>
      </form>
    </div>
  );
};

export default AddTransact;
