import React from 'react';
import Navbar from '../components/Navbar';
import './App.scss';
import { selectTheme } from '../store/reducers/configSlice'
import { useSelector } from 'react-redux';
function App() {
  const theme: string = useSelector(selectTheme)

  return (
    <div className={'theme-'+ theme}>
      <Navbar />
    </div>
  );
}

export default App;
