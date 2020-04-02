import React from 'react';
import { Header } from './components/Header';
import { AddSubject } from './components/AddSubject';
import { SubjectList } from './components/SubjectList';
import { WeightedAvgMark } from './components/WeightedAvgMark';
import { ImportCSV } from './components/ImportCSV';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <AddSubject />
        <SubjectList />
        <WeightedAvgMark />
      </div>
    </GlobalProvider>
  );
}

export default App;
