import CartCard from "./CartCard";

export default function Cart( {items, getTotalAmount, handleRemoveClick} ) {
    return (
        <div className="cartContainer">
            <CartCard items={items} getTotalAmount={getTotalAmount} handleRemoveClick={handleRemoveClick} />
        </div>
        
    )
    
}