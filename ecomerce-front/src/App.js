import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductList from './components/product-list/ProductList';

function App() {
  return (
    <div>
       <Header />
       <ProductList/>
       <Footer />
    </div>
  );
}

export default App;
