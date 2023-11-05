const ProductItem = ({
  product,
  idx,
  toggleCheckBox,
  checkedItems,
  draggingOver,
  dragDropped,
  dragStarted,
}) => {
  // product destructure
  const { _id, img, name } = product;

  return (
    <>
      <label
        draggable
        className={`${
          idx == 0
            ? "col-span-2 row-span-3 lg:row-span-2 w-full h-full"
            : " w-full md:w-[10.375rem] lg:w-[14.375rem] h-full md:h-[10.375rem] lg:h-[14.375rem]"
        } col-span-1 border rounded-lg cursor-pointer relative group`}
        htmlFor={`items${idx}`}
      >
        <div
          onDragStart={(e) => dragStarted(e, product)}
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDropped(e, idx, product)}
        >
          <figure>
            <img className="w-full h-full rounded-lg" src={img} alt={name} />
          </figure>

          <div
            className={`absolute top-0 left-0 w-full h-full rounded-lg group-hover:bg-slate-800 group-hover:bg-opacity-40 ${
              checkedItems.includes(_id) ? "bg-opacity-5 bg-slate-800" : ""
            }`}
          >
            <input
              onClick={() => {
                toggleCheckBox(_id);
              }}
              id={`items${idx}`}
              type="checkbox"
              className="mt-4 ml-4"
              checked={checkedItems.includes(_id)}
            />
          </div>
        </div>
      </label>
    </>
  );
};

export default ProductItem;
