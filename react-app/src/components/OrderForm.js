import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';


function OrderForm()
{
    document.title = 'Создание заказа';
    const [order, setOrder] = useState(
        {
            senderCity: '',
            senderAddress: '',
            receiverCity: '',
            receiverAddress: '',
            weight: '',
            pickupDate: ''
        }
    );

    async function sendForm(event)
    {
        event.preventDefault();
        try
        {
            await axios.post('/api/orders', order);
            alert('Заказ успешно создан!');
            setOrder(
            {
                senderCity: '',
                senderAddress: '',
                receiverCity: '',
                receiverAddress: '',
                weight: '',
                pickupDate: ''
            });
        }
        catch (error)
        {
            console.error('Ошибка при создании заказа:', error);
            alert('Произошла ошибка при создании заказа.');
        }
    }
    return (
        <div className="center-container">
            <Header headerText={"Создать новый заказ"} />
                <form onSubmit={sendForm}>
                    <div>
                        <label>Город отправителя:</label>
                        <input
                            type="text"
                            value={order.senderCity}
                            onChange={(e) => setOrder({ ...order, senderCity: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Адрес отправителя:</label>
                        <input
                            type="text"
                            value={order.senderAddress}
                            onChange={(e) => setOrder({ ...order, senderAddress: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Город получателя:</label>
                        <input
                            type="text"
                            value={order.receiverCity}
                            onChange={(e) => setOrder({ ...order, receiverCity: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Адрес получателя:</label>
                        <input
                            type="text"
                            value={order.receiverAddress}
                            onChange={(e) => setOrder({ ...order, receiverAddress: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Вес груза:</label>
                        <input
                            type="number"
                            value={order.weight}
                            onChange={(e) => setOrder({ ...order, weight: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Дата забора груза:</label>
                        <input
                            type="date"
                            value={order.pickupDate}
                            onChange={(e) => setOrder({ ...order, pickupDate: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Создать заказ</button>
                </form> 
        </div>
    );
} export default OrderForm;