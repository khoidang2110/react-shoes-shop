import React from "react";

function Product(props) {
  const { item, product, onAdd, onRemove } = props;

  return (
    <div className="shopItem">
      <div
        className="shopItemImage"
        style={{ backgroundColor: `${product.color}` }}
      >
        <img src={product.image} />
      </div>
      <div className="shopItemName">{product.name}</div>
      <div className="shopItemDescription">{product.description}</div>
      <div className="shopItemBottom">
        <div className="shopItemPrice">${product.price}</div>

        {item ? (
          <div className="shopItemButton">
            <div className="shopItemButtonCover">
              <div className="shopItemButtonCoverCheckIcon">
               
              </div>
            </div>
          </div>
        ) : (
          <div className="shopItemButton" onClick={() => onAdd(product)}>
            <p>ADD TO CART</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
