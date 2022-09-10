import './App.css';
import Navbar from './components/Navbar';
import Addcontactlist from './components/Addcontact';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Editcontact from './components/Editcontact';

function App() {
  return (
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>  
            <Route path='/addcontact' element={<Addcontactlist/>}/>
            <Route path='/edit/:id' element={<Editcontact/>}/>
          </Routes>
        
        </div>
  );
}

export default App;
