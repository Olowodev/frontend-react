import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/home/Home';
import Products from './pages/products/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stickers' element={<Products />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
