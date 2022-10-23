import './App.css';
import Users from './components/Users';
import AddUsers from './components/AddUsers';
import NavBar from './components/Navigation';
import Contact from './components/Contact';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='gap-8'>
      <div className="mx-auto gap-8 pb-8 flex flex-col">
        <NavBar></NavBar>
        <Routes>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
      <div className='container mx-auto gap-8 flex flex-row'>
        <AddUsers></AddUsers>
        <Users></Users>
      </div>
    </div>

  );
}

export default App;
