import React from 'react';
import './App.css';
import { ProductConsumer } from './Context';
import Home from './Component/Home';  

function App() {
  return (
    <div className="App">
      <ProductConsumer>
        {value => (
          <div>
            <Home />
          </div>
        )}
      </ProductConsumer>
    </div>
  );
}

export default App;



