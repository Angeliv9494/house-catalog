import productCatalog from "./data/products";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Header />

      <section id="catalog-grid">
        <h1>This is the Catalog</h1>
      </section>

      <Footer />
    </>

    
  );
}

export default App;
