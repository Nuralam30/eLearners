import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cart></Cart>
      <Courses></Courses>
    </div>
  );
}

export default App;
