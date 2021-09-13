import React from 'react';
import Card from '../components/Card';
import AppContext from '../components/context';

function Favorit({addToFavorite}) {
const {favorit} = React.useContext(AppContext)
  return (
    <div className="content p-40">
      <div className="d-flex">
        <h1>Мои закладки</h1>      
      </div>
      <div className="d-flex flex-wrap mt-30" >
        {favorit.map((obj) => (
          <Card 
          key={obj.id} 
          title={obj.title} 
          price={obj.price} 
          urlImage={obj.urlImage} f
          favorited={true} 
          addToFavorite={addToFavorite}
          {...obj} />
        ))}
        </div>
    </div>
  );
}
export default Favorit;
