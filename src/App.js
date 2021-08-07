import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import Signup from './Pages/Sinnup/Signup';
import Navbar from './Components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sign-up" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
