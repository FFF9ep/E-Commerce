import React, { useEffect, useState } from 'react';
import axios from '../axios';
import styled from 'styled-components';

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding: 20px;
`;

const ProductCard = styled.div`
    background-color: #333;
    color: #fff;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };
        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        // Logika menambahkan produk ke keranjang, bisa menggunakan Redux atau Context API
        console.log(`Menambahkan ${product.name} ke keranjang`);
        // Tambahkan logika Redux/Context API di sini
    };

    return (
        <div>
            <h1>Daftar Produk</h1>
            <ProductContainer>
                {products.map(product => (
                    <ProductCard key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Harga: Rp {product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>
                            Tambahkan ke Keranjang
                        </button>
                    </ProductCard>
                ))}
            </ProductContainer>
        </div>
    );
}

export default HomePage;
