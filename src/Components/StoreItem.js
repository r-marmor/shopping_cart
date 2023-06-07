import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

export default function StoreItem({ 
    id, 
    quantity, 
    name, 
    price, 
    imgUrl, 
    handleItemUpdate, 
    } 
    ) 
{
    
    return ( 
        <Card className="h-100">
            <Card.Img 
                variant="top" 
                src={imgUrl} 
                height="200px" 
                style={{ objectFit: "cover"}}
                alt={name}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span> 
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => handleItemUpdate(id, 'increase')}>+ Add To Cart</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                            <div className="d-flex justify-content-center align-items-center" style={{gap:".5rem"}}>
                                <Button onClick={() => handleItemUpdate(id, 'decrease')}>-</Button>
                                <span className="fs-3">{quantity}</span> {name} in cart
                                <Button onClick={() => handleItemUpdate(id, 'increase')}>+</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={() => handleItemUpdate(id, 'remove')}>Remove</Button>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    )
    
   
}