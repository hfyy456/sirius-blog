import React from 'react';
import './Navbar.scss'
import { useSelector } from 'react-redux';
import { selectTheme } from '../store/reducers/configSlice'
export default function Navbar(): JSX.Element {
  const theme: string = useSelector(selectTheme)
  return (
    <header className="header-container" >
      {theme}
    </header>
  )
}