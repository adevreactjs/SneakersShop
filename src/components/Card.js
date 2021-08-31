function Card(props) {
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
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    )    
}
export default Card;