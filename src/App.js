import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorit from './pages/Favorit';
import { Route } from 'react-router-dom';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [openCart, setOpenCart] = React.useState(false);
  const [favorit, setFavorit] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://6133bde37859e700176a3795.mockapi.io/items').then((res) => {
      setItems(res.data);
    });

    axios.get('https://6133bde37859e700176a3795.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });

    axios.get('https://6133bde37859e700176a3795.mockapi.io/favorites').then((res) => {
        setFavorit(res.data);
    });
    
  }, []);

     

  const addToCart = (item) => {
    axios.post('https://6133bde37859e700176a3795.mockapi.io/cart', item);
    setCartItems((prev) => [...prev, item]);

  };

  const setInputSearchValue = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  const removeItemsInCart = (id) => {
    axios.delete(`https://6133bde37859e700176a3795.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToFavorite = async (item) => {
    if(favorit.find(obj => obj.id === item.id)) {
      axios.delete(`https://6133bde37859e700176a3795.mockapi.io/favorites/${item.id}`);
      setFavorit(prev => prev.filter(obj => obj.id !== item.id))
    } else {
      const {data} = await axios.post(`https://6133bde37859e700176a3795.mockapi.io/favorites/`, item);
      setFavorit((prev) => [...prev, data]);
    }
    
  };

  return (
    <div className="wrapper clear">
      {openCart && (
        <Drawer
          items={cartItems}
          onClose={() => setOpenCart(false)}
          removeItem={removeItemsInCart}
        />
      )}
      <Header openCart={() => setOpenCart(true)} />
      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setInputSearchValue={setInputSearchValue}
          addToCart={addToCart}
          setFavorits={setFavorit}
          addToFavorite={addToFavorite}
        />
      </Route>

      <Route path="/favorit" exact>
        <Favorit favorit={favorit} addToFavorite={addToFavorite} setFavorit={setFavorit} />
      </Route>
    </div>
  );
}

export default App;
