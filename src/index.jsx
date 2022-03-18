import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Dresses from './components/Dresses';
import Shoes from './components/Shoes';
import Accessories from './components/Accessories';


const App = () => (
  <div className='container'>
    <Header title="Móda" description="Stylové oblečení a doplňky pro každý den"/>
    <Dresses title="Šaty"/>
    <Shoes title="Boty"/>
    <Accessories title="Doplňky"/>
    <Footer year="2022" author="Czechitas" disclosure="Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí."/>
  </div>


);

render(<App />, document.querySelector('#app'));
