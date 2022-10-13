import React from "react";
import { getTransact } from "../../utils/getTransact";

// export async function getStaticPaths() {
//     const res = await getTransact()

//     const paths = res.map((transact) =>({ params: { postId: transact._id} }))

//     return {
//         paths,
//         fallback: true,
//     };
// }

export async function getServerSideProps(context) {
  const transact = await getTransact(context.params.transactId);

  return {
    props: {
      transact,
    },
  };
}
const TransactDetails = ({ transact }) => {
  return (
    <div>
      <h1>TransactDetails</h1>
    </div>
  );
};

export default TransactDetails;
