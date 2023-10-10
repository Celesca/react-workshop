import Navigation from './components/Navigation';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from './components/page/Home';
import Product from './components/page/Product';
import Member from './components/page/Member';
import Admin from './components/page/Admin';

import "./App.css"
function App() {
  return (
    <div>
        <Router>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/member" element={<Member/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;