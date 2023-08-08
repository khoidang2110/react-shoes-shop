import React from "react";
import Product from "./Product";

function Main(props) {
  const {cartItems, shoes,onAdd, onRemove } = props;

  return (
    <div className="card">
      <div className="cardTop">
        <div className="logoNike">
          <img className="cardLogo" src="../src/assets/nike.png" alt="" />
        </div>
      </div>
      <div className="cardTitle">Our Products</div>
      <div className="cardBody">
        <div className="shopItemList">
          {shoes.map((product) => {
            return <Product 
            key={product.id} 
            product={product} 
            item={cartItems.find((x)=> x.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
