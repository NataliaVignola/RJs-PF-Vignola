import React from 'react';

const CartItem = ({ id, name, quantity, price, onRemove }) => {
    // const handleCancel = () => {
    //     onCancel(id);
    // };

    const handleRemove = () => {
        onRemove(id);
    };

    return (
        <div className="CartItem">
            <h4>{name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${price}</p>
            <p>Total de este producto: ${quantity * price}</p>
            {/* <button onClick={handleCancel}>Cancelar</button> */}
            <button onClick={handleRemove}>Eliminar de mi carrito</button>
        </div>
    );
};

export default CartItem;