import React from 'react';
import './App.css';
import CoursesPage from './components/CoursesPage';
import {HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <div className="App">
      
      <CoursesPage/>
    </div>
    </HashRouter>
  );
}

export default App;
