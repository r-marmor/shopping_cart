import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem"
import formatCurrency from "../utilities/formatCurrency";

export default function ShoppingCart( { isOpen, closeCart, items, handleItemUpdate } ) {
    const totalCartAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end" >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {items.map(item => (
                        <CartItem key={item.id} {...item} handleItemUpdate={handleItemUpdate} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total: {totalCartAmount > 0 ? formatCurrency(totalCartAmount) : "0 €"}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
} 