import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import DashBoard from './components/dashboard';
import NavigationBar from './components/navigationBar';
import TaskPad from './components/taskPad';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='*' element={<DashBoard />} />
          <Route path='/tasks' element={<App/>} />
          <Route path='/taskpad' element={<TaskPad />}/>
        </Routes>
      </Router>
);