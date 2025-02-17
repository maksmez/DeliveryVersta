import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';

const OrderDetail = () => {

    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`/api/orders/${id}`);
                setOrder(response.data);
            } catch (error) {
                console.error('Ошибка при загрузке заказа:', error);
            }
        };

        fetchOrder();
    }, [id]);
   

    if (!order)
        return <div>Загрузка...</div>;
    else
        document.title = "Детали заказа #" + order.id;

    return (
        <div className="center-container">
            <Header headerText={"Детали заказа #" + order.id } />
            <div className="detail-page">
                <div className="detail-item">
                    <p><strong>Город отправителя:</strong></p>
                    <p>{order.senderCity}</p>
                </div>
                <div className="detail-item">
                    <p><strong>Адрес отправителя:</strong></p>
                    <p> {order.senderAddress}</p>
                </div>
                <div className="detail-item">
                    <p><strong>Город получателя:</strong></p>
                    <p> {order.receiverCity}</p>
                </div>
                <div className="detail-item">
                    <p><strong>Адрес получателя:</strong></p>
                    <p>{order.receiverAddress}</p>
                </div>
                <div className="detail-item">
                    <p><strong>Вес груза:</strong></p>
                    <p>{order.weight}</p>
                </div>
                <div className="detail-item">
                    <p><strong>Дата забора груза:</strong></p>
                    <p>{new Date(order.pickupDate).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;