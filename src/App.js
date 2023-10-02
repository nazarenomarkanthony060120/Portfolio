import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Contacts from './pages/page/Contacts';
import Skill from './pages/page/Skill';
import Project from './pages/page/Project';
import Minimart from './pages/projects/Minimart';
import Admin from './pages/projects/Admin';
import Teacher from './pages/projects/Teacher';
import Parent from './pages/projects/Parent';
import Attendance from './pages/projects/Attendance';

function App() {
    return (
        <>
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path='/' element={ <Homepage /> }></Route>
                <Route path='/skills' element={ <Skill /> }></Route>
                <Route path='/projects' element={ <Project /> }></Route>
                <Route path='/contact' element={ <Contacts /> }></Route>
                <Route path='/minimart' element={ <Minimart />}></Route>
                <Route path='/admin' element={ <Admin />}></Route>
                <Route path='/teacher' element={ <Teacher />}></Route>
                <Route path='/parent' element={ <Parent />}></Route>
                <Route path='/attendance' element={ <Attendance />}></Route>
            </Routes>
        </BrowserRouter >
        </>
    );
}

export default App;
