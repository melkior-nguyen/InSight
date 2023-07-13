import React from 'react';
import './App.css';
import { db } from './firebase/config'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//component
import { Navbar, Header } from './components';
//pages
import { Home, TicketMn, Ticketcheck, Setting } from './pages';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className='main_container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ticketmanagement' element={<TicketMn />} />
            <Route path='/ticketcheck' element={<Ticketcheck />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>

  );
}

export default App;
