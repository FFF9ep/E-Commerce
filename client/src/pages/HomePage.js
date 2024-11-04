import React, { useEffect, useState } from 'react';
import axios from '../axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

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
    const dispatch = useDispatch();

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
        dispatch(addToCart(product));
        alert(`${product.name} berhasil ditambahkan ke keranjang!`);
    };

    return (
        <div>
            <h1>Daftar Produk</h1>
            <Link to="/cart">
                <button>Lihat Keranjang</button>
            </Link>
            <ProductContainer>
                {products.map((product) => (
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
