// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Card from './Pages/Card';
import Email from './Pages/Email';
import Signin from './Pages/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/card' element={<Card />} />
          <Route exact path='/email' element={<Email />} />
          <Route exact path='/signin' element={<Signin />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;