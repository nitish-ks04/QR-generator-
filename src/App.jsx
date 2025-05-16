import { Routes, Route } from 'react-router-dom';
import Home from './page/home.jsx';
import Input from './page/input.jsx';
import Textinput from './page/text-input.jsx';
import "./css/App.css"
import Navbar from './component/navbar.jsx';
import History from './page/history.jsx';

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <div className="main-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/text-input" element={<Textinput />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

export default App

