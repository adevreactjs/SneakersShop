import React from 'react'

function Card({title, price, urlImage, onPlus}) {

  const [addToCartBtn, setAddToCardBtn] = React.useState(false)
  const [onFavorite, setFavorite] = React.useState(false)

  const addCard = () => {
    onPlus({title, price, urlImage})
    setAddToCardBtn(!addToCartBtn)
  }

  const favoriteClick = () => {
    setFavorite(!onFavorite)
  }

    return (
        <div className="card">
        <img onClick={favoriteClick} src={onFavorite ? "/img/heart-liked.png": "/img/heart-unliked.png"} alt="heart-liked" />
        <img width={133} height={112} src={urlImage} alt="cross" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <p>Цена:</p>
            <b>{price} руб.</b>
          </div>
            <img onClick={addCard} width={32} height={32} src={addToCartBtn ? "/img/addToCart-btn.svg" : "/img/plus.svg"} alt="plus" />
        </div>
      </div>
    )    
}
export default Card;