import React, { useEffect, useState } from 'react';
import logo from 'logo.svg';
import 'components/main/main.css';

function useFetch(url) {
  const [data, setDataState] = useState(null);
  const [loading, setLoadingState] = useState(true);
  useEffect(() => {
    setLoadingState(true);
    fetch(url)
      .then(j => j.json())
      .then(data => {
        setDataState(data);
        setLoadingState(false);
      });
  }, [url]);
  return { data, loading };
}

function App() {
  const { data, loading } = useFetch('https://api.etilbudsavis.dk/v2/dealerfront?country_id=DK');

  return loading ? (
    'Loading!!!'
  ) : (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
