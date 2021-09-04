import React from 'react'

function Card(props) {

  const [addToCartBtn, setAddToCardBtn] = React.useState(false)

  const addCard = () => {
    setAddToCardBtn(!addToCartBtn)
  }

    return (
        <div className="card">
        <img src="/img/heart-liked.png" alt="heart-liked" />
        <img width={133} height={112} src={props.urlImage} alt="cross" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <p>Цена:</p>
            <b>{props.price}</b>
          </div>
            <img onClick={addCard} width={32} height={32} src={addToCartBtn ? "/img/addToCart-btn.svg" : "/img/plus.svg"} alt="plus" />
        </div>
      </div>
    )    
}
export default Card;