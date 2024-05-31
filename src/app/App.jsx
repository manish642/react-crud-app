import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Edit from './components/Edit';
import View from './components/View';
function App() {
  return (
    <div className="container">
    <Routes>
        <Route path='/' element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/view' element={<View />} />
    </Routes>
    </div>
  );
}

export default App;
