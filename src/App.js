import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './Components/LandingPage';
import Blog from './Components/Blog/index'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
