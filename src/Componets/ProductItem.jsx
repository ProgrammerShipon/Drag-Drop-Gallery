const ProductItem = ({
  product,
  idx,
  toggleCheckBox,
  checkedItems,
  handleSort,
  draggedOverProduct,
  dragOverProducts,
  DragOver,
}) => {
  // product destructure
  const { _id, img, name } = product;

  return (
    <>
      <div
        className={`${
          idx == 0
            ? "col-span-2 sm:col-span-2 sm:row-span-2 row-span-3 "
            : "w-full md:w-[10.375rem] lg:w-[14.375rem] h-full md:h-[10.375rem] lg:h-[14.375rem]"
        } col-span-1 border rounded-lg cursor-pointer relative group`}
        htmlFor={`items${idx}`}
        draggable
        onDragStart={() => (dragOverProducts.current = idx)}
        onDragEnter={() => (draggedOverProduct.current = idx)}
        onDragEnd={handleSort}
        onDragOver={(e) => DragOver(e, idx)}
      >
        <label className="w-full h-full">
          {img && (
            <figure>
              <img className="w-full h-full rounded-lg" src={img} alt={name} />
            </figure>
          )}

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
              className={`mt-4 ml-4 ${
                checkedItems.includes(_id) ? "visible" : "hidden hover:block"
              } `}
              checked={checkedItems.includes(_id)}
            />
          </div>
        </label>
      </div>
    </>
  );
};

export default ProductItem;
