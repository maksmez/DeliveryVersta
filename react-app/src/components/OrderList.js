import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function OrderList() {
    document.title = 'Список заказов';
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate(); // Хук для навигации

    useEffect(() => {
        async function getOrders() {
            try {
                const response = await axios.get('/api/orders');
                setOrders(response.data);
            } catch (error) {
                alert('Ошибка при загрузке заказов:\n', error);
                console.error('Ошибка при загрузке заказов:\n', error);
            }
        }
        getOrders();
    }, []); // Пустой массив, чтобы хук сработал только при монтировании компонента

    return (
        <div className="center-container">
            <div className="orderlist-header">
                <Header headerText={"Список заказов"} />
                <button className="btn" onClick={() => navigate("/orders/create")}>Создать заказ</button>
            </div>
            <table className="orders-table">
                <thead className="header-table">
                    <tr>
                        <th><p>Номер заказа</p></th>
                        <th><p>Город отправителя</p></th>
                        <th><p>Адрес отправителя</p></th>
                        <th><p>Город получателя</p></th>
                        <th><p>Адрес получателя</p></th>
                        <th><p>Вес груза</p></th>
                        <th><p>Дата забора</p></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id} onClick={() => navigate(`/orders/${order.id}`)}>
                            <td><p>{order.id}</p></td>
                            <td><p>{order.senderCity}</p></td>
                            <td><p>{order.senderAddress}</p></td>
                            <td><p>{order.receiverCity}</p></td>
                            <td><p>{order.receiverAddress}</p></td>
                            <td><p>{order.weight}</p></td>
                            <td><p>{new Date(order.pickupDate).toLocaleDateString()}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;
