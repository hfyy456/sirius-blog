import React from 'react';
import './App.scss';
import { selectTheme } from '../store/reducers/configSlice'
import { useSelector } from 'react-redux';
import Header from '../components/Header';
function App() {
  const theme: string = useSelector(selectTheme)

  return (
    <div className={'theme-' + theme}>
      <Header />
    </div>
  );
}

export default App;
