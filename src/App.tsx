import React from 'react';
import './App.css';
import { DatePicker } from 'antd';

import {db} from './firebase/config'

function App() {

  console.log(db)
  return (
    <div className="App">
      app <br/>
      <DatePicker/>
    </div>
  );
}

export default App;
