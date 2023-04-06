import styles from './components/styles/App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/';
import ProductOnly from './components/ProductOnly';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route
            path='/'
            element={
              <ProductList
                products={products}
                setProducts={setProducts}
                query={query}
                setQuery={setQuery}
              />
            }
          />
          <Route path='/product/:id' element={<ProductOnly />} />
          <Route path='*' element={<p>No encontrado</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
