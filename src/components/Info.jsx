import React from 'react';
import AppContext from './context';

function Info({title, description}) {

    const {setOpenCart} = React.useContext(AppContext)
  return (
    <div className="emptyCart">
      <img className="box" width={120} height={120} src="/img/box.svg" alt="img" />
      <div class="emptyCart--title">
        <p>Корзина пустая</p>
        <span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
      </div>

      <button onClick={()=> setOpenCart(false)} className="greenButton">
        <img className="arrow" src="/img/arrow-back.png" alt="arrow" /> Вернуться назад
      </button>
    </div>
  );
}

export default Info;
