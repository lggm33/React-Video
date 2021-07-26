/* eslint-disable import/prefer-default-export */

//initState trae los datos de la fake api que se encuentra en initialState
//usando json-server, por lo que si se vuelve a reenderizar el componente home
// se pierden los datos de mylist, ya que no se esta cambiando la informacion
// del documento que se usa para la API, solo se cambia el estado del store.
//Por eso es que se llama a getState y se destructura la informacion de mylist
export const initState = (API) => (dispatch, getState) => {
  const actualData = getState();
  const getData = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => ({ ...data, mylist: actualData.mylist }))
      .then((data) => dispatch({ type: 'INIT_STATE', payload: data }))
      .catch((error) => console.log(error));
  };
  getData();
};

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const removeFavorite = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({
    type: 'REMOVE_FAVORITE',
    payload,
  });
};

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logOutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const playingRequest = (payload) => (dispatch) => {
  dispatch({
    type: 'PLAYING_REQUEST',
    payload,
  });

};
