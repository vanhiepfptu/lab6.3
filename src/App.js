import './App.css';
import { useEffect } from 'react';
import Users from './components/Users';
import AddUsers from './components/AddUsers';
import NavBar from './components/Navigation';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {
  Routes,
  Route,
} from "react-router-dom";
import FetchAPI from './components/FETCH/fetchAPI';

const handleCredentialResponse = (response) => {
  console.log("Encoded JWT ID token: " + response.credential);
  document.getElementById('buttonDiv').hidden = true;
}
useEffect(() => {
  /* global google*/
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "Your Client ID……",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }
}, []);
return (
  <div id='buttonDiv'></div>
);

function App() {
  return (
    <div className='gap-8'>
      <div className="mx-auto gap-8 pb-8 flex flex-col">
        <NavBar></NavBar>
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path='/adduser' element={<AddUsers></AddUsers>}></Route> */}
          <Route path='/' element={<Resume></Resume>}></Route>
          <Route path='/fetch' element={<FetchAPI></FetchAPI>}></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
