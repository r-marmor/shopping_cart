export default function Card( { itemName, itemPrice, itemImg, itemQuantity }) {
    
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
                            <button className="btn btn-primary">-</button>
                            <p>{itemQuantity} {itemName} in cart</p>
                            <button className="btn btn-primary">+</button>
                        </div>
                        <button className="btn btn-danger">Remove</button>
                    </>
                ) : (<button className="btn btn-primary btn-add-to-cart"> + Add to cart</button>
                )}

            </div>
    )
}