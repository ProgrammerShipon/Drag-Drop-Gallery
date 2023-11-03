import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const productLoad = async () => {
      const res = await fetch("/products-items.json");
      const data = await res?.json();

      setProducts(data);
    };

    productLoad();
  }, []);

  return { products };
};

export default useProducts;
