export default function CartCard( {items, getTotalAmount, handleRemoveClick} ) {
    return (
        <>
            {items.map(item => (
                item.quantity > 0 &&
                    <div className="cartCard" key={item.id}>
                        <img className="imgCart" src={item.img} alt={item.name} />
                        <div className="cartCardDesc"><div><span className="bold">{item.quantity > 1 ? item.name + 's' : item.name}</span> x{item.quantity}</div>  {(item.quantity * item.price).toFixed(2)}€</div>
                        <button className="btn btn-danger" onClick={() => handleRemoveClick(item.id)}>x</button>
                    </div>
            ))} 
            <div className="totalCart">Total: <span className="bold">{getTotalAmount(items).toFixed(2)}€</span></div>    
        </>
           
    )
}