import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import AddUsers from './components/AddUsers';

function App() {
  return (
    <div className="container mx-auto py-8">
      <AddUsers></AddUsers>
      <Users></Users>
    </div>
  );
}

export default App;
