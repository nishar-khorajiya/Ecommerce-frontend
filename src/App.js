import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="container">
          <Routes>
            <Route exact path='/login' element={<Login></Login>}></Route>
            <Route exact path='/signup' element={<Signup></Signup>}></Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
