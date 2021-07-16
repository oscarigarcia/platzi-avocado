import React from "react";
import { useRouter } from "next/router";

const ProductId = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <p>Esta es la página del producto: {id}</p>
    </div>
  );
};

export default ProductId;
