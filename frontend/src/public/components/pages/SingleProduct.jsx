function SingleProduct() {
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages / Top Cell Phone & Tablet
        <span className="text-md font-semibold text-black">
          Some Mobile galaxy walaxy
        </span>
      </div>

      <div className="w-full bg-white rounded-lg">
        <div>
          <img src="" alt="" />
          <div>
            <img src="" alt="" />
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

            <p className="bg-green-100 rounded text-[#1ABA1A] w-fit">FREE SHIPPING</p>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
