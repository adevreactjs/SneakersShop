import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: "12999 руб", urlImage: '/img/cross.jpg'},
    {title: 'Мужские Кроссовки Nike Air Max 270', price: 13999, urlImage: '/img/cross-2.jpg' },
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 15999, urlImage: '/img/cross-3.jpg'},
    {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 7999, urlImage: '/img/cross-4.jpg' },
  ];

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
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} urlImage={obj.urlImage} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
