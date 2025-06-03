import productCatalog from "./data/products";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { ProductGrid } from "./components/ProductGrid.tsx";
import { Preview } from "./components/Preview.tsx";

function App() {
  const testModal = true;

  return (
    <>
      <Header />

      {!testModal && <ProductGrid products={productCatalog} />}

      {testModal && <Preview productId={1}/>}

      <Footer />
    </>
  );
}

export default App;
