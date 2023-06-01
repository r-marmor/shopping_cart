import Card from "./Card";

export default function Shop( {items, handleIncreaseQuantityClick, handleDecreaseQuantityClick, handleRemoveClick} ) {
    return (
        <div className="shopContainer">
            <h1>Shop</h1>
            <div className="itemsContainer">
            {items.map(item => (
                <Card 
                    key={item.id}
                    itemId={item.id} 
                    itemImg={item.img} 
                    itemName={item.name} 
                    itemPrice={item.price} 
                    itemQuantity={item.quantity}
                    handleIncreaseQuantityClick={handleIncreaseQuantityClick}
                    handleDecreaseQuantityClick={handleDecreaseQuantityClick}
                    handleRemoveClick={handleRemoveClick}
                />
            ))} 
            </div>
        </div>      
    )
}