import logo from './logo.svg';
import { React, useEffect, useState } from "react";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">Products</div>
        <div className="header-title">Filters</div>
        
      </header>
      <div className="product-container">
      {
        Array.isArray(products) ?
          products?.map((product) => (
            <div className="event" key={product.id}>
              <li>
                <b>Name</b>: {product.title}
              </li>
              <li>
                <b>Price</b>: {product.price}
              </li>
            </div>
          ))
          : <div className="event" key={products.id}>
            <li>
              <b>Name</b>: {products.title}
            </li>
            <li>
              <b>Price</b>: {products.price}
            </li>
          </div>

      }
      </div>
      <div className="main-container">
Product Information - Product Image
      </div>
    </div>
  );
}

export default App;

