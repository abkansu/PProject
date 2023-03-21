import './App.css';
import HastaGirisSayfasi from './main/sayfalar/hastaGirisSayfasi/HastaGirisSayfasi';
import SemptomSayfasi from './main/sayfalar/semptomSayfasi/SemptomSayfasi';
import AnaSayfa from './main/sayfalar/anaSayfa/AnaSayfa';
import HekimGirisSayfasi from './main/sayfalar/hekimGirisSayfasi/HekimGirisSayfasi';
import YeniHastaSayfasi from './main/sayfalar/yeniHastaSayfasi/YeniHastaSayfasi';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import HastaListeleSayfasi from './main/sayfalar/hastaListelesayfasi/HastaListeleSayfasi';
import HekimIlkSayfa from './main/sayfalar/hekimIlkSayfa/HekimIlkSayfa';
import BolgeSayfasi from './main/sayfalar/bolgeSayfasi/BolgeSayfasi';

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
        <Route exact path={"/hastaListele"}> <HastaListeleSayfasi /></Route>
        <Route exact path={"/hekimIlkSayfa"}> <HekimIlkSayfa /></Route>
        <Route exact path={"/bolgeSayfasi"}> <BolgeSayfasi /></Route>
        <Redirect to={"/"}/>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
