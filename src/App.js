import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import About from './Components/About';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import { useState } from 'react';
import { fakeData } from './data/fakeData';

function App() {
  const [items, setItems] = useState(
    fakeData.map(item => ({
      ...item,
      quantity: 0
    }))
  );

  const [totalItems, setTotalItems] = useState(0);

  const getTotalItems = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }

  const getTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  }
  
  const handleIncreaseQuantityClick = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1};
      } else {
        return item;
      }
    });
    const newTotalItems = getTotalItems(newItems);
    setItems(newItems)
    setTotalItems(newTotalItems)
  }

  const handleDecreaseQuantityClick = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1}
      } else {
        return item;
      }
    });
    const newTotalItems = getTotalItems(newItems);
    setItems(newItems)
    setTotalItems(newTotalItems)
  }

  const handleRemoveClick = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: 0}
      } else {
        return item;
      }
    });
    const newTotalItems = getTotalItems(newItems);
    setItems(newItems)
    setTotalItems(newTotalItems)
  }

  return (
    <div className='mainContainer'>
      <NavBar totalItems={totalItems} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/shop" element={
              <Shop 
                items={items} 
                handleIncreaseQuantityClick={handleIncreaseQuantityClick}
                handleDecreaseQuantityClick={handleDecreaseQuantityClick}
                handleRemoveClick={handleRemoveClick}
              />}>
          </Route>
          <Route path="/cart" element={<Cart items={items} getTotalAmount={getTotalAmount} handleRemoveClick={handleRemoveClick} />} ></Route>
        </Routes>
    </div>
  )
}

export default App;
