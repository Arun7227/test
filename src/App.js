import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { useState } from 'react';

function App() {
  const [headertext,SetHeadertext]=useState('initial text');
  const update=(e)=>{
e.preventDefault()
    SetHeadertext('text changed')

  }
  return (
    <div className="App">
    <Header headertext={headertext}/>
    <div className='appc'>
      <p>left text</p>
      <p>right  text</p>
    </div>
    <button onClick={e=>update(e)}>change text</button>
    <Footer/>
    </div>
  );
}

export default App;
