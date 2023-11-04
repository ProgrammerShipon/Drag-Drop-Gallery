import React, { useState } from "react";

const ProductItem = ({ product, idx, toggleCheckBox }) => {
  // product destructure
  const { _id, img, name } = product;
  const [checks, setChecks] = useState(false);

  return (
    <>
      <label
        className={`${
          idx == 0
            ? "col-span-2 row-span-2 w-full h-full"
            : " w-[14.375rem] h-[14.375rem]"
        } col-span-1 border rounded-lg cursor-pointer relative group`}
        htmlFor={`items${idx}`}
      >
        <div>
          <figure>
            <img className="w-full h-full rounded-lg" src={img} alt={name} />
          </figure>

          <div
            className={`absolute top-0 left-0 w-full h-full rounded-lg group-hover:bg-slate-800 group-hover:bg-opacity-40 ${
              checks ? "bg-opacity-5 bg-slate-800" : ""
            }`}
          >
            <input
              onClick={() => {
                setChecks(!checks);
                toggleCheckBox(_id);
              }}
              id={`items${idx}`}
              type="checkbox"
              className="mt-4 ml-4"
            />
          </div>
        </div>
      </label>
    </>
  );
};

export default ProductItem;
