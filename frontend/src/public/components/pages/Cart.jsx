import prod5 from "../../../assets/products/product2/prod9.png.png";
import prod6 from "../../../assets/products/product3/prod10.png.png";
import prod7 from "../../../assets/products/product4/prod11.png.png";
import prod8 from "../../../assets/products/product5/prod12.png.png";
import prod9 from "../../../assets/products/product6/prod13.png.png";
import prod10 from "../../../assets/products/prod14.png";
import prod11 from "../../../assets/products/prod15.png";
import prod12 from "../../../assets/products/prod16.png";
import prod13 from "../../../assets/products/prod17.png";
import prod14 from "../../../assets/products/prod18.png";
import prod15 from "../../../assets/products/prod19.png";
import prod16 from "../../../assets/products/prod20.png";
import prod17 from "../../../assets/products/prod21.png";
import prod18 from "../../../assets/products/prod22.png";
import prod19 from "../../../assets/products/prod23.png";
import prod20 from "../../../assets/products/prod24.png";
import prod21 from "../../../assets/products/div.banner.png";
import prod22 from "../../../assets/products/prod46.png.png";

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
    {
      id: 6,
      image: prod10,
      name: "Laptop Stand",
      stock: 10,
      price: 24.99,
    },
    {
      id: 7,
      image: prod11,
      name: "USB-C Hub",
      stock: 18,
      price: 34.99,
    },
    {
      id: 8,
      image: prod12,
      name: "Webcam HD",
      stock: 7,
      price: 69.99,
    },
    {
      id: 9,
      image: prod13,
      name: "Portable SSD",
      stock: 11,
      price: 99.99,
    },
    {
      id: 10,
      image: prod14,
      name: "Monitor 24 Inch",
      stock: 4,
      price: 179.99,
    },
    {
      id: 11,
      image: prod15,
      name: "Gaming Chair",
      stock: 3,
      price: 249.99,
    },
    {
      id: 12,
      image: prod16,
      name: "Desk Lamp",
      stock: 14,
      price: 19.99,
    },
    {
      id: 13,
      image: prod17,
      name: "Power Bank",
      stock: 25,
      price: 39.99,
    },
    {
      id: 14,
      image: prod18,
      name: "Wireless Earbuds",
      stock: 9,
      price: 79.99,
    },
    {
      id: 15,
      image: prod19,
      name: "Tablet Stand",
      stock: 16,
      price: 22.99,
    },
    {
      id: 16,
      image: prod20,
      name: "Smartphone Case",
      stock: 30,
      price: 14.99,
    },
    {
      id: 17,
      image: prod21,
      name: "Promotional Banner",
      stock: 1,
      price: 0,
    },
    {
      id: 18,
      image: prod22,
      name: "Premium Backpack",
      stock: 6,
      price: 89.99,
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">My Cart</span>
      </div>

      <div>
        <div>
            {cartProducts.map((prod)=> (
                <div key={prod.id}>
                    <img src={prod.image} alt="" />
                    <h2>{prod.name}</h2>
                    <p>{prod.stock} In Stock</p>

                </div>
            ))

         
            }
        </div>
      </div>
    </section>
  );
}

export default Cart;
