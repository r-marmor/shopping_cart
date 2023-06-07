import { Button, Stack } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

export default function CartItem( {id, name, price, imgUrl, quantity, handleItemUpdate} ) {
     
    
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            {quantity > 0 && 
                <>
                    <img
                        src={imgUrl}
                        style={{ width: "125px", height: "75px", objectFit: "cover" }}
                        alt={name}
                    />
                    <div className="me-auto">
                        {name} <span className="text-muted" style={{fontSize:".75rem"}}>x{quantity}</span>
                        <div className="text-mute" style={{fontSize:"0.75rem"}}>{formatCurrency(price)}</div>
                    </div>
                        {formatCurrency(price * quantity)}
                        <Button variant="outline-danger" size="sm" onClick={() => handleItemUpdate(id, 'remove')}>&times;</Button>
                    
                </>
                }
        </Stack>
      
    )
}