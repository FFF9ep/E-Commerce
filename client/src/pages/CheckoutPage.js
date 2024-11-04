import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from '../axios';

const CheckoutContainer = styled.div`
    padding: 20px;
    color: #ffffff;
`;

function CheckoutPage() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleCheckout = async () => {
        try {
            await axios.post('/checkout');
            alert('Checkout berhasil!');
            // Jika Anda menggunakan Redux, Anda bisa menambahkan action untuk membersihkan keranjang setelah checkout
        } catch (error) {
            console.error('Error during checkout', error);
            alert('Checkout gagal. Silakan coba lagi.');
        }
    };

    return (
        <CheckoutContainer>
            <h1>Checkout</h1>
            {cartItems.length === 0 ? (
                <p>Keranjang Anda kosong</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>Harga: Rp {item.price}</p>
                        </div>
                    ))}
                    <button onClick={handleCheckout}>Lanjutkan Checkout</button>
                </>
            )}
        </CheckoutContainer>
    );
}

export default CheckoutPage;
