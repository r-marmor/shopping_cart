import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import About from './Components/About';
import Shop from './Components/Shop';
import { useState } from 'react';
import { fakeData } from './data/fakeData';

function App() {
  const [items, setItems] = useState(
    fakeData.map(item => ({
      ...item,
      quantity: 0
    }))
  );

  const handleIncreaseQuantityClick = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1};
      } else {
        return item;
      }
    });
    setItems(newItems);
  }

  const handleDecreaseQuantityClick = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1}
      } else {
        return item;
      }
    });
    setItems(newItems);
  }

  const handleRemoveClick = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: 0}
      } else {
        return item;
      }
    });
    setItems(newItems)
  }

  
  return (
    <div className='mainContainer'>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route 
            path="/shop" 
            element={
              <Shop 
                items={items} 
                handleIncreaseQuantityClick={handleIncreaseQuantityClick}
                handleDecreaseQuantityClick={handleDecreaseQuantityClick}
                handleRemoveClick={handleRemoveClick}
              />}>
          </Route>
        </Routes>
    </div>
  )
}

export default App;
