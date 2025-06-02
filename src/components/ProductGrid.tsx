import { type Product } from "../data/products";
import './ProductGrid.css'

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = (props: ProductGridProps) => {
  const { products } = props;

  const productElements = products.map((product) => {
    return (
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-stock">{product.quantity}</p>

      </div>
    );
  });

  return <div className="product-grid">{productElements}</div>;
};
