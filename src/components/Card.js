function Card() {
    return (
        <div className="card">
        <img src="/img/heart-liked.png" alt="heart-liked" />
        <img width={133} height={112} src="/img/cross.jpg" alt="cross" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <p>Цена:</p>
            <b>12 000 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    )    
}
export default Card;