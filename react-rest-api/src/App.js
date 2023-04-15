import { BrowserRouter ,Route,Link, Routes } from 'react-router-dom';
import './App.css';
import { UserList } from './userComponents/userlist';
import { AddUser } from './userComponents/adduser';
import { Details } from './userComponents/details';
import { EditUser } from './userComponents/editUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <nav>
            <ul className='nav'>
              <li className='nav-item'>
                <Link to="/userlist" className='nav-link'>UserList</Link>  
              </li>
              <li className='nav-item'>
                <Link  to="/adduser" className='nav-link'>Registration</Link>  
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/userlist' element={<UserList/>}></Route>
            <Route path='/adduser' element={<AddUser/>}></Route>
            <Route path='/details/:id' element={<Details />}></Route>
            <Route path='/edituser/:id' element={<EditUser />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
