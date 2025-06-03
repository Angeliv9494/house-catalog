import productCatalog from "./data/products";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { ProductGrid } from "./components/ProductGrid.tsx";

function App() {
  return (
    <>
      <Header />

      <ProductGrid products={productCatalog} />

      <Footer />
    </>
  );
}

export default App;
