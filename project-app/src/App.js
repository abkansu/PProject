import './App.css';
import HastaGirisSayfasi from './main/sayfalar/hastaGirisSayfasi/HastaGirisSayfasi';
import SemptomSayfasi from './main/sayfalar/semptomSayfasi/SemptomSayfasi';
import AnaSayfa from './main/sayfalar/anaSayfa/AnaSayfa';
import HekimGirisSayfasi from './main/sayfalar/hekimGirisSayfasi/HekimGirisSayfasi';
import YeniHastaSayfasi from './main/sayfalar/yeniHastaSayfasi/YeniHastaSayfasi';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route exact path={"/"}> <AnaSayfa /></Route>
        <Route exact path={"/giris"}> <HastaGirisSayfasi /></Route>
        <Route exact path={"/semptom"}> <SemptomSayfasi /></Route>
        <Route exact path={"/login"}> <HekimGirisSayfasi /></Route>
        <Route exact path={"/yeniHasta"}> <YeniHastaSayfasi /></Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
