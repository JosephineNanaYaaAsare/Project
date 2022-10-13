import React from 'react'
import { getTransact } from "../../utils/getTransact"
import Link from "next/Link"

export async function getStaticProps() {
const transact = await getTransact();

return {
    props: {
        transact,
    }
}
}

const Transact = ({transact}) => {
  console.log(transact)
  
  return (
    <div>
        {transact.map((transact) =>(
            <p>
              <Link href={`/transact/${transact.id}`}>{transact.name}</Link>
            </p>
        ))}
    </div>
  )
}

export default Transact;