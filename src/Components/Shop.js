import Card from "./Card";

export default function Shop( {items, setItems} ) {
    return (
        <div className="shopContainer">
            <h1>Shop</h1>
            <div className="itemsContainer">
            {items.map(item => (
                <Card key={item.id} itemImg={item.img} itemName={item.name} itemPrice={item.price} itemQuantity={item.quantity} />
            ))} 
            </div>
        </div>      
    )
}