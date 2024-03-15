import "./assets/css/frontend.css"
// import Header from './components/frontend/header/Header';
// import Content from './components/frontend/content/Content';
// import Arrays from './components/frontend/content/Arrays';
// import Footer from './components/frontend/footer/Footer';
import Product from "./components/frontend/content/Product";
import ProductDetails from "./components/frontend/content/ProductDetails";

function App() {
  return (
    <div className="main">
      {/** HEADER START HERE  */ }
      {/* <Header headerContent='This is the header' />
       */}
      {/** CONTENT START HERE  */ }
      {/* <Content /> */}

      {/** FOOTER START HERE  */ }
      {/* <Footer /> */}
      {/* <Arrays /> */}
      <Product />
      <ProductDetails />
    </div>
  );
}

export default App;
