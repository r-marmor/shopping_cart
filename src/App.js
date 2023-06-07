import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar  from "./components/Navbar";
import { useEffect, useMemo, useState } from "react";
import itemsData from "./data/item.json"

function App() {
  const initialItems = JSON.parse(localStorage.getItem('cart')) || itemsData.map(item => ({
    ...item,
    quantity: 0
  }));

  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const [isOpen, setIsOpen] = useState(false);

  const handleItemUpdate = (id, operation) => {
    const newItems = items.map(item => {
      if (item.id === id) {
          switch (operation) {
              case 'increase':
                  return { ...item, quantity: item.quantity + 1 };
              case 'decrease':
                  return item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item;
              case 'remove':
                  return { ...item, quantity: 0 };
              default:
                  return item;
          }
      } else {
          return item;
      }
    })
    setItems(newItems) 
}

  const getTotalItems = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }

  const totalItems = useMemo(() => getTotalItems(items), [items]);

  const  openCart = () => setIsOpen(true);

  const  closeCart = () => setIsOpen(false);

  return (
  <>
    <Navbar
      items={items} 
      getTotalItems={totalItems}
      isOpen={isOpen}
      openCart={openCart}
      closeCart={closeCart}
      handleItemUpdate={handleItemUpdate}
    />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/store" 
          element={
            <Store 
              items={items} 
              handleItemUpdate={handleItemUpdate} 
            />} 
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  </>
  )
}

export default App;
