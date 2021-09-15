import React from 'react';
import AppContext from './context';

function Drawer({ onClose, items, removeItem }) {
  const { cartItems } = React.useContext(AppContext);

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-delete.svg" alt="img" />
        </h2>

        <div className="emptyCart">
          <img className="box" width={120} height={120} src="/img/box.svg" alt="img" />
          <div class="emptyCart--title">
            <p>Корзина пустая</p>
            <span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
          </div>

          <button className="greenButton">
            <img className="arrow" src="/img/arrow-back.png" alt="arrow" /> Вернуться назад
          </button>
        </div>
        {cartItems &&
          items.map((obj) => (
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
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
