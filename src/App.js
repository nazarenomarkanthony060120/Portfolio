import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Contacts from './pages/page/Contacts';
import Skill from './pages/page/Skill';
import Project from './pages/page/Project';

function App() {
    return (
        <>
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path='/' element={ <Homepage /> }></Route>
                <Route path='/skills' element={ <Skill /> }></Route>
                <Route path='/projects' element={ <Project /> }></Route>
                <Route path='/contact' element={ <Contacts /> }></Route>
            </Routes>
        </BrowserRouter >
        </>
    );
}

export default App;
