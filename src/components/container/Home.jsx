/* eslint-disable react/destructuring-assignment */
// import useInitialState from '../../hooks/useInitialState';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initState } from '../../redux/actions';
import Search from '../Search';
import Categories from '../Categories';
import Carousel from '../Carousel';
import CarouselItem from '../CarouselItem';
import Loading from '../Loading';
import Footer from '../Footer';

import '../../assets/styles/App.scss';
import Header from '../Header';

const API = 'http://localhost:3000/initialState';

const Home = ({ initState, mylist, trends, originals, match }) => {

  useEffect(() => {
    initState(API);
  }, []);

  return false ? <Loading /> : (
    <>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carousel>
          {
            mylist.length > 0 ? (
              mylist.map((item) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} isMyList />
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
            trends.length > 0 ? (
              trends.map((item) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} isMyList={false} />
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
            originals.length > 0 ? (
              originals.map((item) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} isMyList={false} />
              ))
            ) : (
              <h2>No hay elementos</h2>
            )
          }
        </Carousel>
      </Categories>
      <Footer />
    </>

  );
};

const mapDispatchToProps = {
  initState,
};

const mapStateToProps = ({ mylist, trends, originals }) => {
  return {
    mylist, trends, originals,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
