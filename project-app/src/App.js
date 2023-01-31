import './App.css';
import GirisSayfasi from './girisSayfasi/GirisSayfasi';
import SemptomSayfasi from './semptomSayfasi/SemptomSayfasi';
import AnaSayfa from './anaSayfa/AnaSayfa';
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
