import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage';

const App = ()=> {
  return (
    <Fragment>
      <Header></Header>
      <main>
      <LandingPage></LandingPage>
      </main>
    </Fragment>
  );
}

export default App;
