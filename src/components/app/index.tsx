import Header from '../header';
import Footer from '../footer';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import TransactionsTable from '../transactions/transactionsTable';
import React from 'react';

const AppRoutes = () => {
  const routes = useRoutes([{ path: '/', element: <TransactionsTable /> }]);
  return routes;
};

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <AppRoutes />
      </Router>
      <Footer />
    </>
  );
};

export default App;
