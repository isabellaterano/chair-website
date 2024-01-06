import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;

  const { data: product, error, loading } = useFetch(url);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <div className="image">
        <img src={product.image} />
      </div>
      {error && <p>An error has occurred...</p>}
      {loading && <p>Loading product...</p>}
      {product && (
        <>
          <div className="descrition-product">
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
          <button className="addToCart">Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
