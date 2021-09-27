import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorit from './pages/Favorit';
import { Route } from 'react-router-dom';
import AppContext from './components/context';
import Orders from './pages/Orders';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [openCart, setOpenCart] = React.useState(false);
  const [favorit, setFavorit] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://6133bde37859e700176a3795.mockapi.io/cart');
      const favResponse = await axios.get('https://6133bde37859e700176a3795.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://6133bde37859e700176a3795.mockapi.io/items');

      setCartItems(cartResponse.data);
      setFavorit(favResponse.data);
      setItems(itemsResponse.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const addToCart = async (item) => {
    try {
      const findItems = cartItems.find((obj) => Number(obj.perentId) === Number(item.id))
      if (findItems) {
        await axios.delete(`https://6133bde37859e700176a3795.mockapi.io/cart/${findItems.id}`);
        setCartItems((prev) => prev.filter((obj) => Number(obj.perentId) !== Number(item.id)));
      } else {
        const {data} = await axios.post('https://6133bde37859e700176a3795.mockapi.io/cart', item);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
    }
  };

  const setInputSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const removeItemsInCart = (id) => {
    axios.delete(`https://6133bde37859e700176a3795.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const isItemAdd = (id) => {
    return cartItems.some((obj) => Number(obj.perentId) === Number(id));
  };

  const addToFavorite = async (item) => {
    try {
      if (favorit.find((obj) => obj.id === item.id)) {
        axios.delete(`https://6133bde37859e700176a3795.mockapi.io/favorites/${item.id}`);
        setFavorit((prev) => prev.filter((obj) => obj.id !== item.id));
      } else {
        const { data } = await axios.post(
          `https://6133bde37859e700176a3795.mockapi.io/favorites/`,
          item,
        );
        setFavorit((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };

  return (
    <AppContext.Provider value={{ favorit, isItemAdd, cartItems, setOpenCart, setCartItems }}>
      <div className="wrapper clear">
        {openCart && (
          <Drawer
            items={cartItems}
            onClose={() => setOpenCart(false)}
            removeItem={removeItemsInCart}
          />
        )}
          <Header openCart={() => setOpenCart(true)} />

        <Route path="/SneakersShop" exact>
          <Home
            items={items}
            searchValue={searchValue}
            setInputSearchValue={setInputSearchValue}
            addToCart={addToCart}
            setFavorits={setFavorit}
            addToFavorite={addToFavorite}
            cartItems={cartItems}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorit" exact>
          <Favorit addToFavorite={addToFavorite} setFavorit={setFavorit} />
        </Route>

        <Route path='/orders' exact>
          <Orders/>
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
