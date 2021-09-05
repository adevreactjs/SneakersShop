function Drawer({onClose, items=[]}) {
    return (
        <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина
            <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-delete.svg" alt="img" />
          </h2>
          {
            items.map((obj) => (
              <div className="cartItem d-flex align-center">
            <img className="mr-20" width={70} height={70} src={obj.urlImage} alt="img" />
            <div className="">
              <p className="">{obj.title}</p>
              <b>{obj.price}руб.</b>
            </div>
            <img className="remove-btn" src="/img/btn-delete.svg" alt="img" />
          </div>
            ))
          }
          {/* <div className="cartItem d-flex align-center">
            <img className="mr-20" width={70} height={70} src="/img/cross.jpg" alt="img" />
            <div className="">
              <p className="">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="/img/btn-delete.svg" alt="img" />
          </div>

          <div className="cartItem d-flex align-center">
            <img className="mr-20" width={70} height={70} src="/img/cross.jpg" alt="img" />
            <div className="">
              <p className="">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="/img/btn-delete.svg" alt="img" />
          </div> */}

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

    )
}

export default Drawer;