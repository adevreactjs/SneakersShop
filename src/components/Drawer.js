import React from 'react';
import AppContext from './context';
import Info from './Info';
import axios from 'axios';

function Drawer({ onClose, items, removeItem }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);

  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)

  const onClickOrderComplete = async () => {
    try {
      const {data} = await axios.post('https://6133bde37859e700176a3795.mockapi.io/orders', {items: cartItems});
      setOrderId(data.id);

      cartItems.forEach(items => {
         axios.delete(`https://6133bde37859e700176a3795.mockapi.io/cart/${items.id}`);
      });


      setCartItems([])

    } catch (error) {
      alert('Ваш заказ не был отправлен');
    }
    setIsLoading(true)
    setIsOrderComplete(true);
    setCartItems([]);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-delete.svg" alt="img" />
        </h2>

        {cartItems.length > 0 ? (
          <>
            {items.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-center">
                <img className="mr-20" width={70} height={70} src={obj.urlImage} alt="img" />
                <div className="">
                  <p className="">{obj.title}</p>
                  <b>{obj.price}руб.</b>
                </div>
                <img
                  className="remove-btn"
                  onClick={() => removeItem(obj.id)}
                  src="/img/btn-delete.svg"
                  alt="img"
                />
              </div>
            ))}
            <div className="items">
              <ul className="cartTotalBlock">
                <li className="d-flex mb-20">
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
                <button disabled={isLoading} onClick={onClickOrderComplete} className="greenButton">
                  Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
                </button>
              </ul>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? '/img/complete.svg' : '/img/box.svg'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;

{
  /* <div className="items">
<ul className="cartTotalBlock">
  <li className="d-flex mb-20">
    <span>Итого: </span>
    <div></div>
    <b>21 498 руб. </b>
  </li>
  <li className="d-flex">
    <span>Налог 5%: </span>
    <div></div>
    <b>1074 руб. </b>
  </li>
  <button className="greenButton">
    Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
  </button>
</ul>
</div> */
}
