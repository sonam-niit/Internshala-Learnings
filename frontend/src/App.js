import logo from './logo.svg';
import './App.css';
import { AddUser } from './components/adduser';
import { UserList } from './components/usrelist';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
