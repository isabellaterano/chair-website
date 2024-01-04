import "./Products.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        {products.map((product) => (
          <>
            <img key={product.id} src={product.image} />
            <p>{product.name}</p>
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
