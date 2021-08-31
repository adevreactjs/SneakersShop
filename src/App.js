import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {

  const arr = [{name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999}, 
               {name: "Мужские Кроссовки Nike Air Max 270", price: 14999}]

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex">
          {arr.map(val => (
            <Card/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
