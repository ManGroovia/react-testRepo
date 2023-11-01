import { Login } from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
