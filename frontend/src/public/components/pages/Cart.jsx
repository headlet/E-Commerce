import prod5 from "../../../assets/products/product2/prod9.png.png";
import prod6 from "../../../assets/products/product3/prod10.png.png";
import prod7 from "../../../assets/products/product4/prod11.png.png";
import prod8 from "../../../assets/products/product5/prod12.png.png";
import prod9 from "../../../assets/products/product6/prod13.png.png";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useState, useMemo } from "react";

function Cart() {
  const cartProducts = [
    {
      id: 1,
      image: prod5,
      name: "Wireless Headphones",
      stock: 12,
      price: 59.99,
    },
    {
      id: 2,
      image: prod6,
      name: "Gaming Mouse",
      stock: 8,
      price: 29.99,
    },
    {
      id: 3,
      image: prod7,
      name: "Mechanical Keyboard",
      stock: 5,
      price: 89.99,
    },
    {
      id: 4,
      image: prod8,
      name: "Smart Watch",
      stock: 15,
      price: 129.99,
    },
    {
      id: 5,
      image: prod9,
      name: "Bluetooth Speaker",
      stock: 20,
      price: 49.99,
    },
  ];

  const total = cartProducts
    .reduce((sum, prod) => {
      return sum + prod.price;
    }, 0)
    .toFixed(2);

  // ✅ default cart values = 1
  const initialCart = useMemo(() => {
    const obj = {};
    cartProducts.forEach((prod) => {
      obj[`cart${prod.id}`] = 1;
    });
    return obj;
  }, []);

  const [cartData, setCartData] = useState(initialCart);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCartData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const increaseQty = (id) => {
    setCartData((prev) => ({
      ...prev,
      [`cart${id}`]: prev[`cart${id}`] + 1,
    }));
  };

  const decreaseQty = (id) => {
    setCartData((prev) => ({
      ...prev,
      [`cart${id}`]: Math.max(1, prev[`cart${id}`] - 1),
    }));
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">My Cart</span>
      </div>

      {/* Added gap-6 to separate the cart and summary columns */}
      <div className="bg-white rounded-lg w-full p-6 flex flex-col md:flex-row gap-6">
        {/* CART PRODUCTS SECTION (Set to 75% - 80% width) */}
        <div className="w-full md:w-[78%] flex flex-col gap-3">
          {cartProducts.map((prod) => (
            /* Added a unique key to the outermost mapping element instead of the inner div */
            <div
              key={prod.id}
              className="flex bg-gray-100 p-4 rounded-lg gap-3 justify-between"
            >
              <div className="flex">
                <img
                  src={prod.image}
                  alt=""
                  className="h-56 w-56 object-cover rounded-md"
                />

                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-lg font-semibold">{prod.name}</h2>
                  <p className="text-lg">${prod.price}</p>

                  {/* Quantity Controls UI */}
                  <div className="bg-white rounded-lg w-fit flex items-center border border-gray-200">
                    <button
                      onClick={() => decreaseQty(prod.id)}
                      className="px-3 py-1 hover:bg-gray-100 transition-colors"
                    >
                      <FaMinus />
                    </button>

                    <input
                      type="text"
                      name={`cart${prod.id}`}
                      value={cartData[`cart${prod.id}`] || 1}
                      onChange={handleChange}
                      className="text-center w-12 focus:outline-none"
                    />

                    <button
                      onClick={() => increaseQty(prod.id)}
                      className="px-3 py-1 hover:bg-gray-100 transition-colors"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <p className="bg-green-100 rounded text-[#1ABA1A] w-fit px-2 py-0.5 text-sm font-medium">
                    FREE SHIPPING
                  </p>

                  <p className="text-sm text-gray-500">{prod.stock} In Stock</p>
                </div>
              </div>

              <div>
                <button className="h-9 w-9 flex items-center justify-center text-red-600 bg-red-50 hover:bg-red-100 rounded-full transition-colors duration-200 text-xl font-bold">
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY SECTION (Set to 20% - 22% width) */}
        <div className="w-full md:w-[22%] bg-gray-50 p-6 rounded-lg h-fit flex flex-col gap-4 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2">
            Order Summary
          </h2>
          <div className="flex justify-between text-gray-600">
            <span>Sub Total:</span>
            <span className="font-semibold">${total}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping estimate:</span>
            <span className="text-green-600 font-medium">$0</span>
          </div>
          <hr className="border-gray-200my-1" />
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Order Total:</span>
            <span>${total}</span>
          </div>

          <button className="w-full bg-[#1ABA1A] hover:bg-[#159415] text-white font-semibold py-3 rounded-lg mt-2 transition-colors duration-200 shadow-sm">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
