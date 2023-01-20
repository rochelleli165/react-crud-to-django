import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListTeacherComponent from './components/ListTeacherComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTeacherComponent from './components/CreateTeacherComponent';
import ViewTeacherComponent from './components/ViewTeacherComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" element = < ListTeacherComponent /> > </Route>
                          <Route path = "/Teachers" element = < ListTeacherComponent />></Route>
                          <Route path = "/add-Teacher/:id" element = {CreateTeacherComponent}></Route>
                          <Route path = "/view-Teacher/:id" element = {ViewTeacherComponent}></Route>
                          {/* <Route path = "/update-Teacher/:id" component = {UpdateTeacherComponent}></Route> */}
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;