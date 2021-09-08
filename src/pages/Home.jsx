import Card from '../components/Card';

function Home({items, searchValue, setInputSearchValue, addToCart, setFavorits, addToFavorite}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск: ${searchValue}` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input onChange={setInputSearchValue} value={searchValue} placeholder="Поиск..."></input>
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
              favItems={setFavorits}
              addToFavorite={addToFavorite}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;
