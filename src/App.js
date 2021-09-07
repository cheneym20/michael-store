import logo from './logo.svg';
import { React, useEffect, useState } from "react";
import './App.css';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/2`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Use the fake store data to create your own store front end project to show.
        </p>
        <a href="https://fakestoreapi.com/"> Fake Store Data</a>
        <p>You can Do THIS!!!!!!y</p>
      </header>

      {
        Array.isArray(products) ?
          products?.map((product) => (
            <div className="event" key={product.id}>
              <li>
                <b>Name</b>: {product.title}
              </li>
            </div>
          ))
          : <div className="event" key={products.id}>
            <li>
              <b>Name</b>: {products.title}
            </li>
          </div>

      }

    </div>
  );
}

export default App;

