import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import SearchBar from './Components/SearchBar';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar/>
      <SearchBar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
