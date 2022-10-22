import './App.css';
import Users from './components/Users';
import AddUsers from './components/AddUsers';

function App() {
  return (
    <div className="container mx-auto py-8 gap-8 flex flex-row">
      <AddUsers></AddUsers>
      <Users></Users>
    </div>
  );
}

export default App;
