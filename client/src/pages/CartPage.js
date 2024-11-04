import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CartContainer = styled.div`
    padding: 20px;
    color: #ffffff;
`;

const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);


function CartPage() {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <CartContainer>
            <h1>Keranjang Belanja</h1>
            {cartItems.length === 0 ? (
                <p>Keranjang Anda kosong</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Harga: Rp {item.price}</p>
                        <p>Jumlah: 1</p>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Hapus</button>
                        <p>Total Harga: Rp {totalPrice}</p>
                    </div>
                ))
            )}
        </CartContainer>
    );
}

export default CartPage;
