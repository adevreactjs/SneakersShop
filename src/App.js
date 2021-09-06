import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { Route } from 'react-router-dom'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [openCart, setOpenCart] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('https://6133bde37859e700176a3795.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      axios.get('https://6133bde37859e700176a3795.mockapi.io/cart')
      .then(res => {
        setCartItems(res.data)
      })
  }, []);

  const addToCart = (item) => {
    axios.post('https://6133bde37859e700176a3795.mockapi.io/cart', item)
    setCartItems((prev) => [...prev, item]);
  };

  const setInputSearchValue = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  const removeItemsInCart = (id) => {
    axios.delete(`https://6133bde37859e700176a3795.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="wrapper clear">
      {openCart && <Drawer items={cartItems} onClose={() => setOpenCart(false)}  removeItem={removeItemsInCart}/>}
      <Header openCart={() => setOpenCart(true)} />
      <Route path="/favorite" exact></Route>
      
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={setInputSearchValue}
              value={searchValue}
              placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj) => (
              <Card
                key={obj.id}
                title={obj.title}
                price={obj.price}
                urlImage={obj.urlImage}
                onPlus={addToCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
