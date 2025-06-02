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
        {product.quantity === 0 && (<img src="./vendido.png" alt="vendido" className="sold-image"/>)}
        <h1 className="product-name">{product.name}</h1>
        <h2 className="product-description">{product.description}</h2>
        <p className="product-price">{product.price.toLocaleString('en-US',{style: 'currency' , currency : 'MXN'})}</p>
        <p className="product-stock"><strong>Disponibles:</strong> {product.quantity}</p>

      </div>
    );
  });

  return <div className="product-grid">{productElements}</div>;
};
