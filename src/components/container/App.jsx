import React from 'react';
import Header from '../Header';
import Search from '../Search';
import Categories from '../Categories';
import Carousel from '../Carousel';
import CarouselItem from '../CarouselItem';
import Footer from '../Footer';
import useInitialState from '../../hooks/useInitialState';
import Loading from '../Loading';

import '../../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = (props) => {
  const initialState = useInitialState(API);
  return initialState.loading ? <Loading /> : (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carousel>
          {
            initialState.mylist.length > 0 ? (
              initialState.trends.map((item) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} />
              ))
            ) : (
              <h1>No hay elementos</h1>
            )
          }
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends.length > 0 ? (
              initialState.trends.map((item) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} />
              ))
            ) : (
              <h2>No hay elementos</h2>
            )
          }
        </Carousel>
      </Categories>
      <Categories title='Originales'>
        <Carousel>
          {
            initialState.originals.length > 0 ? (
              initialState.originals.map((item) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} />
              ))
            ) : (
              <h2>No hay elementos</h2>
            )
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>

  );
};
export default App;
