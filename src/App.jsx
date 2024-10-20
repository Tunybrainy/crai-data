
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar';
import Home from './components/home';
import AgencyIndex from './components';
import Mission from './components/mission';
import Contact from './components/contact';

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home className ="h-full w-full"/>} />
        <Route path="/index" element={<AgencyIndex/>} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;