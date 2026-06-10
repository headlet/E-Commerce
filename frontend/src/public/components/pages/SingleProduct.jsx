import product1 from "../../../assets/products/product1/prod.png";
import product2 from "../../../assets/products/product1/prod5.png";
import product3 from "../../../assets/products/product1/prod6.png";
import product4 from "../../../assets/products/product1/prod7.png";
import product5 from "../../../assets/products/product1/prod8.png";

function SingleProduct() {
  const img = [product2, product3, product4, product5];
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages / Top Cell Phone & Tablet
        <span className="text-md font-semibold text-black">
          Some Mobile galaxy walaxy
        </span>
      </div>

      <div className="w-full bg-white rounded-lg flex p-4">
        <div className="flex flex-col gap-6">
          <img src={product1} alt="" className=""/>
          <div className="flex justify-center gap-6">
            {img.map((img) => (
              <img src={img} alt="" />
            ))}
          </div>
        </div>

        <div>
          <div>
            <h2>Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone</h2>
            <p>$300.00-$600.00</p>
            <ul className="p-4 list-disc">
              <li>
                Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core DDR5
              </li>

              <li>
                Compatible: 4*SMD DIMMs with XMP 3.0 Memory Commanding Power
              </li>
              <li>Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>

            <p className="bg-green-100 rounded text-[#1ABA1A] w-fit">
              FREE SHIPPING
            </p>
          </div>

          <div>
            <h2>COLOR: <span>Midnight Blue</span></h2>
            <div>
              <img src="" alt="" />
              <p>Midnight Blue</p>
              <p>$556</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
