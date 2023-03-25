import './App.css';
import Login from './components/login/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/signup/signup';
import PrivateRoute from "./components/auth/PrivateRoute";
import Notes from './components/NotesUi/NotesUi';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/notes" element={<PrivateRoute Child={Notes} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

