/* eslint-disable no-return-assign */
/* eslint-disable react/no-typos */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavorite, removeFavorite } from '../redux/actions';
import '../assets/styles/componets/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {

  const { id,
    cover,
    title,
    year,
    contentRating,
    duration,
    isMyList,
    mylist,
  } = props;

  const handleSetFavorite = () => {
    props.setFavorite(
      { id, cover, title, year, contentRating, duration },
    );
  };

  const handleRemoveFavorite = () => {
    props.removeFavorite(id);
  };

  return (
    <div className='carousel-item'>
      <Link to={`/player/${id}`}>
        <img
          className='carousel-item__img'
          src={cover}
          alt={title}
        />
      </Link>
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {
            !isMyList && mylist.find((video) => video.id === id) === undefined ? (
              <img
                className='carousel-item__details--img'
                src={plusIcon}
                alt='Plus Icon'
                onClick={handleSetFavorite}
              />
            ) : null
          }

          {
            isMyList ? (
              <img
                className='carousel-item__details--img'
                src={removeIcon}
                alt='Remove Icon'
                onClick={handleRemoveFavorite}
              />
            ) : null
          }
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};
const mapDispatchToProps = {
  setFavorite,
  removeFavorite,
};

const mapStateToProps = ({ mylist }) => ({
  mylist,
});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
