import React from 'react'
import { getTransact } from "../../utils/getTransact"

export async function getStaticProps() {
const transact = await getTransact();

return {
    props: {
        transact,
    }
}
}

const Transact = ({transact}) => {
  return (
    <div>
        {transact.map((transact) =>(
            <p>{transact.name}</p>
        ))}
    </div>
  )
}

export default Transact;