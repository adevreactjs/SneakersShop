import React from 'react';
import AppContext from './context';

function Info({title, description, image}) {

    const {setOpenCart} = React.useContext(AppContext)
  return (
    <div className="emptyCart">
      <img className="box" width={120} height={120} src={image} alt="img" />
      <div className="emptyCart--title">
        <p>{title}</p>
        <span>{description}</span>
      </div>

      <button onClick={()=> setOpenCart(false)} className="greenButton">
        <img className="arrow" src="img/arrow-back.png" alt="arrow" /> Вернуться назад
      </button>
    </div>
  );
}

export default Info;
