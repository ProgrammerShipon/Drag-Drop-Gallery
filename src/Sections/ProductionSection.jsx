import ProductItem from "../Componets/ProductItem";
import useProducts from "../Hooks/useProducts";

const ProductionSection = () => {
  const { products } = useProducts();
  console.log("use Products", products);

  return (
    <section className="bg-[#edf2f7] min-h-screen py-5">
      <div className="container mx-auto">
        <div className=" bg-white rounded-md shadow-sm">
          {/* section Header part */}
          <div className="border-b border-gray-400 px-3 py-2">
            <p> Gallery </p>
          </div>

          {/* section body content */}
          <div className="px-3 py-2">
            <div className="grid grid-cols-5 gap-5 grid-flow-row-dense">
              {products &&
                products.map((product, idx) => (
                  <ProductItem key={idx} idx={idx} product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
