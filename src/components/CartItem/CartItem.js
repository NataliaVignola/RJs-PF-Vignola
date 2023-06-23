import React from 'react';

const CartItem = ({ name, quantity, price, total, onCancel, onRemove }) => {
    const handleCancel = () => {
        onCancel ();
    }

    return (
    <div className="CartItem">
        <h4>{name}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio producto: ${price}</p>
        <p>Sub-total: ${total}</p>
        <button onClick={handleCancel}>Cancelar</button>
        <button onClick={onRemove}>Eliminar un producto</button>
    </div>
    );
};

export default CartItem;