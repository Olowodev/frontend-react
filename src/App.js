import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import SinglePage from './pages/singlePage/SinglePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stickers' element={<Products />} />
          <Route path='/single' element={<SinglePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
