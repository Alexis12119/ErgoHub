import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Categories from './components/Categories';
import ProductPage from './components/ProductPage';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
