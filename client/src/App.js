import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme } from './theme';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
`;
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </Router>
    );
}

export default App;
