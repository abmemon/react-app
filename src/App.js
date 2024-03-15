import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./assets/css/frontend.css"
// import Header from './components/frontend/header/Header';
// import Content from './components/frontend/content/Content';
// import Arrays from './components/frontend/content/Arrays';
// import Footer from './components/frontend/footer/Footer';
import Product from "./components/frontend/content/Product";
import ProductDetails from "./components/frontend/content/ProductDetails";
import Content from "./components/frontend/content/Content";

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
      <BrowserRouter>
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/content"> Content</Link></li>
      </ul>

      <Routes>
       <Route path="/" element={<Product />}/>
       <Route path="/content" element={<Content />}/>
      </Routes>
      
      </BrowserRouter>
      <Product />
      <ProductDetails />
    </div>
  );
}

export default App;
