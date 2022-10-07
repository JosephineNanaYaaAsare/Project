import axios from "axios"

const getTransact = async (id) => {
const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/transact`)
const transact = await res.data.transact;

if (id) {
    const transact = transact.find((transact) => transact._id == id);
    return transact;
}
return transact;
}