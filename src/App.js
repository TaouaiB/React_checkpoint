import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './components/Cards/Cards';
import NavB from './components/NavB/NavB';

//Main funtion
function App() {
  return (
    <div>
      {/* NavBar */}
      <NavB />
      {/* Cards */}
      <Cards />
    </div>
  );
}

export default App;
