import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [openCart, setOpenCart] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://6133bde37859e700176a3795.mockapi.io/items').then((res) => {
      setItems(res.data)

    }).catch(function (error) {
      console.log(error);
    })
  }, [])

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item])
  }

  return (
    <div className="wrapper clear"> 
      {openCart && <Drawer items={cartItems} onClose = {() => setOpenCart(false)}/>}
      <Header openCart ={() => setOpenCart(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex">
          {items.map((obj) => (
            <Card title={obj.title} price={obj.price} urlImage={obj.urlImage} onPlus ={addToCart}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
