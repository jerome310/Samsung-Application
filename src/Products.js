import React, { useState } from "react";
import "./Products.css";

const Product = ({ addToCart }) => {
  const [products] = useState([
    {
      image:
        "https://images.samsung.com/is/image/samsung/assets/us/mobile/smartphones/06302020/P6_Mobile_Smartphones-PCD_QA-062920_Galaxy-S-2x.jpg?$220_240_JPG$",
      name: "Galaxy S",
      price: "$499.99",
    },
    {
      image:
        "https://images.samsung.com/is/image/samsung/assets/us/mobile/smartphones/06302020/P6_Mobile_Smartphones-PCD_QA-062920_Galaxy-Z-Flip-2x.jpg?$220_240_JPG$",
      name: "Galaxy Z Flip",
      price: "$930.00",
    },
    {
      image:
        "https://images.samsung.com/is/image/samsung/assets/us/mobile/smartphones/06302020/P6_Mobile_Smartphones-PCD_QA-062920_Galaxy-Note-2x.jpg?$220_240_JPG$",
      name: "Galaxy Note",
      price: "$559.99",
    },
    {
      image:
        "https://images.samsung.com/is/image/samsung/assets/us/mobile/smartphones/06302020/P6_Mobile_Smartphones-PCD_QA-062920_Galaxy-A-2x.jpg?$220_240_JPG$",
      name: "Galaxy A",
      price: "$99.99",
    },
  ]);

  return (
    <div>
      <div className="header">
        <h6>Smartphones</h6>
        <h1>A Galaxy for</h1>
        <h1>everyone</h1>
        <img src="https://images.samsung.com/is/image/samsung/assets/us/mobile/smartphones/06172020/P6_Smartphones_HD03_General_KV_PC.jpg?$1440_810_JPG$"/>
        <h2>Explore Galaxy</h2>
      </div>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
