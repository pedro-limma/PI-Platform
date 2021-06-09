import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';

import Routes from './routes';

import GlobalStyle from './styles/global';

ReactGA.initialize('UA-171406858-1', {
  // debug: true
});

const App: React.FC = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
