import './App.css';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import JobList from './components/Job LIst/JobList';
import JobDetails from './components/Job LIst/JobDetails';
import Login from './components/User/Login';
import Register from './components/User/Register';

function App() {  
  return (      
      <BrowserRouter>
      <div className="App"> 
      <Routes>
      <Route path='/' element={<JobList/>}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/job/:id' element={<JobDetails/>}/>
      </Routes>
      <ToastContainer theme="dark" />          
      </div>
      </BrowserRouter>    
  );
}

export default App;
