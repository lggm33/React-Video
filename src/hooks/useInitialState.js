import { useState, useEffect } from 'react';

const useInitialState = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [], loading: true });

  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((response) => {
        const data = { ...response, loading: false };
        setVideos(data);
      });
  }, []);

  return videos;
};

export default useInitialState;
