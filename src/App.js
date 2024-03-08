import './App.css';
import Header from './components/frontend/header/Header';
import Content from './components/frontend/content/Content';
import Footer from './components/frontend/footer/Footer';

function App() {
  return (
    <>
      {/** HEADER START HERE  */ }
      <Header headerContent='This is the header' />
      
      {/** CONTENT START HERE  */ }
      <Content />

      {/** FOOTER START HERE  */ }
      <Footer />
    </>
  );
}

export default App;
