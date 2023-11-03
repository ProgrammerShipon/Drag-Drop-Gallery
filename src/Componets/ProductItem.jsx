import React from "react";

const ProductItem = ({ product, idx }) => {
  // product destructure
  const { id, img, name } = product;

  return (
    <>
      <div
        className={`${idx == 0 && "col-span-2 row-span-2"} col-span-1 border`}
      >
        <figure>
          <img className="w-full h-full" src={img} alt={name} />
        </figure>
      </div>
    </>
  );
};

export default ProductItem;
