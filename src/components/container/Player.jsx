/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { playingRequest, initState } from '../../redux/actions';
import Header from '../Header';
import Loading from '../Loading';
import '../../assets/styles/componets/Player.scss';

const Player = (props) => {
  const { playing, history, match, playingRequest, initState, trends } = props;
  console.log(props);
  const { id } = match.params;
  const API = 'http://localhost:3000/initialState';

  useEffect(() => {
    playingRequest(Number(id));
    if (trends.length === 0) {
      initState(API);
    }
  }, []);

  useEffect(() => {
    playingRequest(Number(id));
  });

  return (
    <>
      <Header isPlayer />
      <div className='Player'>
        {
          playing === undefined ? (
            <Loading />
          ) : (
            <video controls>
              <source
                src={playing.source}
                type='video/mp4'
              />
            </video>
          )
        }
        <div className='Player-back'>
          <button type='button' onClick={() => history.goBack()}>
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  playingRequest,
  initState,
};

const mapStateToProps = ({ playing, trends }) => ({
  playing,
  trends,
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
