import productCatalog from "./data/products";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { ProductGrid } from "./components/ProductGrid.tsx";
import { Preview } from "./components/Preview.tsx";

function App() {
  const test = true;

  return (
    <>
      <Header />

      <ProductGrid products={productCatalog} />

      {test && <Preview />}

      <Footer />
    </>
  );
}

export default App;
