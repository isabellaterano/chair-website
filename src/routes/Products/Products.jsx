import "./Products.css";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const url = "http://localhost:3000/products";

const Product = () => {
  const [products, setProducts] = useState([]);

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <div className="title">
        <h2>Lounge Chairs</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      <div className="products">
        {items &&
          items.map((product) => (
            <div className="description" key={product.id}>
              <img src={product.image} />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button className="addToCart">Add to Cart</button>
              <Link to={`/products/${product.id}`}>
                <button className="view-product">View Product</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
