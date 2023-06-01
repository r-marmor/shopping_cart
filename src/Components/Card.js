export default function Card( { itemName, itemId, itemPrice, itemImg, itemQuantity, handleIncreaseQuantityClick, handleDecreaseQuantityClick, handleRemoveClick }) {
    
    return (
            <div className="cardContainer">
                <img src={itemImg} alt={itemName} />
                <div className="itemName">
                    <h4>{itemName}</h4>
                    <p>{itemPrice}</p>
                </div>
                {itemQuantity > 0 ? (
                    <>
                        <div className="itemButtons">
                            <button className="btn btn-primary" onClick={() => handleDecreaseQuantityClick(itemId)}>-</button>
                            <p>{itemQuantity} {itemName} in cart</p>
                            <button className="btn btn-primary" onClick={() => handleIncreaseQuantityClick(itemId)}>+</button>
                        </div>
                        <button className="btn btn-danger" onClick={() => handleRemoveClick(itemId)}>Remove</button>
                    </>
                ) : (<button className="btn btn-primary btn-add-to-cart" onClick={() => handleIncreaseQuantityClick(itemId)}> + Add to cart</button>
                )}

            </div>
    )
}