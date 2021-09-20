import React from 'react';
import Card from '../components/Card';
import axios from 'axios'


function Orders() {
    const [orders, setOrders] = React.useState([])



    React.useEffect(() => {

        const fetchOrder = async () => {
            try {
               const {data} = await axios.get('https://6133bde37859e700176a3795.mockapi.io/orders')
                const orders = data.map((obj) => obj.items).flat();
                setOrders(orders)
            } catch (error) {
                alert('Ошибка при загрузке заказов')
            }
        }
        fetchOrder()
        
    }, [])

  return (
    

    <div className="content p-40">
      <div className="d-flex">
        <h1>Мои заказы</h1>      
      </div>
      <div className="d-flex flex-wrap mt-30" >
        {orders.map((obj) => (
          <Card 
          key={obj.id} 
          title={obj.title} 
          price={obj.price} 
          urlImage={obj.urlImage} 
          {...obj} />
        ))}
        </div>
    </div>
  );
}
export default Orders;
