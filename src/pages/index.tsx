import React, { useState, useEffect } from "react";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <h1>Hola bienvenido a aguacate</h1>
      {productList?.map((product, key) => (
        <div key={key}>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
