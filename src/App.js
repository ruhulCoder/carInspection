import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Price from './Pages/Price';
import Booking from './Pages/Booking';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import Faq from './Pages/Faq';
// import Login from './Pages/Login';
// import Footer from './Components/Footer';
// import Menubar from './Components/Menubar';

function App() {
  return (
      <>
      <Switch>
        {/* <Route exact path='/' component={Login}/> */}
        {/* <Route exact path='/menubar' component={Menubar}/> */}
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/price' component={Price}/>
        <Route exact path='/booking' component={Booking}/>
        <Route exact path='/terms' component={Terms}/>
        <Route exact path='/privacy' component={Privacy}/>
        <Route exact path='/faq' component={Faq}/>
        {/* <Route exact path='/footer' component={Footer}/> */}
      </Switch>
      </>
  );
}

export default App;