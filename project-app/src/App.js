import './App.css';
import GirisSayfasi from './main/girisSayfasi/GirisSayfasi';
import SemptomSayfasi from './main/semptomSayfasi/SemptomSayfasi';
import AnaSayfa from './main/anaSayfa/AnaSayfa';
import { Route, BrowserRouter as Router, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route exact path={"/"}> <AnaSayfa /></Route>
        <Route exact path={"/giris"}> <GirisSayfasi /></Route>
        <Route exact path={"/semptom"}> <SemptomSayfasi /></Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
