// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Component/Home';
import Create from './Component/Create';
import Update from './Component/Update';
import Read from './Component/Read'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='read/:id' element={<Read/>}/>
      </Routes>
    </Router>
  );
}

export default App;
