import { useState } from "react";
import data from "./data/shoes.json";
import Main from "./components/Main";
import Basket from "./components/Basket";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const { shoes } = data;
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
    }
  };
  const onDelete = (product) => {
       const newCartItems = cartItems.filter((x) => x.id !== product.id)
   setCartItems(newCartItems);
  }

  return (
    <>
      <body>
        <div className="container">
          <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} shoes={shoes} />
          <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}/>
        </div>
      </body>
    </>
  );
}

export default App;
