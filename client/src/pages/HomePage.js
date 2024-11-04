import React, { useEffect, useState } from 'react';
import axios from '../axios';

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

    return (
        <div>
            <h1>Daftar Produk</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default HomePage;
