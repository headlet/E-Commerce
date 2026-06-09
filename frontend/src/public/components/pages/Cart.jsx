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

  // ✅ default cart values = 1
  const initialCart = useMemo(() => {
    const obj = {};
    cartProducts.forEach((prod) => {
      obj[`cart${prod.id}`] = 1;
    });
    return obj;
  }, []);

  const [cartData, setCartData] = useState(initialCart);

  // ✅ input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCartData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  // ➕ increase quantity
  const increaseQty = (id) => {
    setCartData((prev) => ({
      ...prev,
      [`cart${id}`]: prev[`cart${id}`] + 1,
    }));
  };

  // ➖ decrease quantity (min 1)
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

      <div className="bg-white rounded-lg w-full p-6">
        <div className="flex flex-col gap-3">
          {cartProducts.map((prod) => (
            <div
              key={prod.id}
              className="flex bg-gray-100 p-4 rounded-lg gap-3"
            >
              <img src={prod.image} alt="" className="h-56 w-56" />

              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-semibold">{prod.name}</h2>
                <p className="text-lg">${prod.price}</p>

                {/* UI UNCHANGED (only logic added) */}
                <div className="bg-white rounded-lg">
                  <button onClick={() => decreaseQty(prod.id)}>
                    <FaMinus />
                  </button>

                  <input
                    type="text"
                    name={`cart${prod.id}`}
                    value={cartData[`cart${prod.id}`] || 1}
                    onChange={handleChange}
                  />

                  <button onClick={() => increaseQty(prod.id)}>
                    <FaPlus />
                  </button>
                </div>

                <p className="bg-green-100 rounded text-[#1ABA1A] w-fit">
                  FREE SHIPPING
                </p>

                <p>{prod.stock} In Stock</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cart;