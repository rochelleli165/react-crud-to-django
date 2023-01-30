import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListTeacherComponent from './components/ListTeacherComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTeacherComponent from './components/CreateTeacherComponent';
import ViewTeacherComponent from './components/ViewTeacherComponent';

function App() {

  return (
    <div>
        <BrowserRouter>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" element = {< ListTeacherComponent />} exact > </Route>
                          <Route path = "/Teachers" element = {< ListTeacherComponent />} exact > </Route>
                          <Route path = "/add-Teacher/:id" element = {< CreateTeacherComponent />} exact></Route>
                          <Route path = "/view-Teacher/:id" element = {< ViewTeacherComponent />} exact ></Route>
                          {/* <Route path = "/update-Teacher/:id" component = {UpdateTeacherComponent}></Route> */}
                    </Routes>
                </div>
              <FooterComponent />
        </BrowserRouter>
    </div>
    
  );
}

export default App;