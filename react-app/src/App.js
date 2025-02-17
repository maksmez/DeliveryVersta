import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderDetail from './components/OrderDetail';
import "./components/style.css";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/orders" replace />} />
                <Route path="/orders/create" element={<OrderForm />} />
                <Route path="/orders" element={<OrderList />} />
                <Route path="/orders/:id" element={<OrderDetail />} />
            </Routes>
        </Router>
    );
};

export default App;