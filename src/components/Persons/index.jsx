import React from 'react';
import PersonList from './components/PersonList';
import Header from './components/Header';
import Footer from './components/Footer';

import style from './persons.module.scss';
function Persons() {
  return (
    <div className={style.persons}>
      <Header />
      <PersonList />
      <Footer />
    </div>
  );
}

export default Persons;
