import React, { useContext } from 'react';

import AppContext from './context';

function Card({ title, price, urlImage, onPlus, addToFavorite, favorited, id }) {
  const [onFavorite, setFavorite] = React.useState(favorited);
  const {isItemAdd} = useContext(AppContext)

  const addCard = () => {
    onPlus({ id, title, price, urlImage, perentId:id });
  };

  const favoriteClick = () => {
    addToFavorite({ title, price, urlImage, id });
    setFavorite(!onFavorite);
  };
  return (

    <div className="card">
      {addToFavorite && <img
        onClick={favoriteClick}
        src={onFavorite ? '/img/heart-liked.png' : '/img/heart-unliked.png'}
        alt="heart-liked"
      />}
      <img width="100%" height={135} src={urlImage} alt="cross" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        {onPlus && <img
            onClick={addCard}
            width={32}
            height={32}
            src={isItemAdd(id) ? '/img/addToCart-btn.svg' : '/img/plus.svg'}
            alt="plus"
          />}
      </div>
    </div>
  );
}
export default Card;
